/* eslint-disable react/jsx-no-comment-textnodes */
import { FunctionComponent, Key, useContext } from "react";
import { Fragment } from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import logo from "../public/logo.svg";
import { Popover, Transition } from "@headlessui/react";
import CartContext from "../components/CartContext";
import { Stripe } from "stripe";
import {
  getPriceTotal,
  getProductDescription,
  getProductImage,
  getProductName,
} from "../utils/computed";
import Image from "next/image";
import Link from "next/link";

const ShopHeader: FunctionComponent = () => {
  const { items, remove } = useContext(CartContext);
  const removeFromCart = (priceID: string) => {
    if (remove) {
      remove(priceID);
    }
  };

  const checkout = async () => {
    const lineItems = items?.map((price) => {
      return {
        price: price.id,
        quantity: 1,
      };
    });

    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ lineItems: lineItems }),
    });

    const b = await res.json();
    window.location.href = b.session.url;

    // const session = await stripe.checkout.sessions.create({
    //     success_url: 'http://localhost:3000/success',
    //     cancel_url: 'http://localhost:3000/cancel',
    //     line_items: lineItems,
    //     mode: 'payment',
    // });

    // console.log('here')
  };

  return (
    <>
      <div className="">
        <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8 z-50">
          <Popover.Button className="group -m-2 p-2 flex items-center outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>

            <span className="ml-1 text-sm font-medium text-gray-700 group-hover:text-gray-800">
              {items?.length}
            </span>
            <span className="sr-only">items in cart, view bag</span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel className="absolute top-16 inset-x-0 mt-px pb-6 bg-white shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
              <h2 className="sr-only">Shopping Cart</h2>

              <div className="max-w-2xl mx-auto px-4">
                <ul role="list" className="divide-y divide-gray-200">
                  {items?.map((price) => (
                    <li key={price.id} className="py-6 flex">
                      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                        <Image
                          src={getProductImage(price.product)}
                          alt={getProductDescription(price.product)}
                          className="w-full h-full object-center object-cover"
                          height={500}
                          width={500}
                        />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{getProductName(price.product)}</h3>
                            <p className="ml-4">€{getPriceTotal(price)}</p>
                          </div>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex">
                            <button
                              onClick={(e) => removeFromCart(price.id)}
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={checkout}
                  className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 mt-5 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Checkout
                </button>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </>
  );
};

export default ShopHeader;
