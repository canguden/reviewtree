import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import CartContext from "../components/CartContext";
import { FunctionComponent, Key, useContext } from "react";
import logo from "../public/logo.svg";
import reviewtreeicon from "../public/reviewtreeicon.svg";
import Image from "next/image";
import ShopHeader from "./ShopHeader";

const Header = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();
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
    <div className=" max-w-[1400px] z-50 mx-4 xl:mx-auto  flex justify-between items-center h-[60px] lg:h-[70px] bg-slate-100 rounded-full mt-10 shadow-xl">
      <div className="flex max-w-5xl  mx-1  justify-between flex-row items-center uppercase text-xl font-extrabold">
        <Link href="/" className="flex flex-row">
          <Image
            src={logo}
            height={150}
            width={150}
            alt="logo"
            className="fixed-element ml-5"
          />
          <span className="-tracking-[2px]">😍🌴</span>
        </Link>
      </div>
      <div>
        <ul className="hidden xl:flex xl:px-4 mx-10 xl:flex-row items-center font-light ">
          <Link href="/shop">
            <li className="text-md font-bold ml-6 flex cursor-pointer py-4 px-5 hover:bg-slate-200 hover:rounded-xl hover:py-4 hover:px-5 duration-300">
              {" "}
              Products
            </li>
          </Link>

          <Link href="/faq">
            <li className="text-md font-bold ml-6 flex  py-4 px-5 cursor-pointer hover:bg-slate-200 hover:rounded-xl hover:py-4 hover:px-5 duration-300">
              FAQs
            </li>
          </Link>

          <Link href="/contact">
            <li className="text-md font-bold ml-6 flex  py-4 px-5 cursor-pointer hover:bg-slate-200 hover:rounded-xl hover:py-4 hover:px-5 duration-300">
              Contact
            </li>
          </Link>

          <Link href="/yourlink">
            <li className="text-md ml-6 font-bold  flex  py-4 px-5 cursor-pointer">
              <button className="bg-slate-700 py-3 px-4 rounded-full hover:bg-slate-800 duration-300 text-white">
                Request Link
              </button>
            </li>
          </Link>
          <li className="text-md  font-bold  flex  py-4 px-5 cursor-pointer">
            <ShopHeader />
          </li>
        </ul>
      </div>
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 right-0 xl:hidden"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 right-0 w-[300px] h-screen bg-slate-700 z-10 duration-300 xl:hidden"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-slate-700 z-10 duration-300 xl:hidden"
        }
      >
        <AiOutlineCloseCircle
          onClick={() => setNav(!nav)}
          size={40}
          className="absolute  right-4 top-4 text-white cursor-pointer"
        />

        <nav>
          <ul className="flex flex-col text-center justify-center items-center group p-4 text-white font-semibold mt-10">
            <Link href="/" onClick={() => setNav(!nav)}>
              <li className="text-2xl py-4 flex  cursor-pointer">Home</li>
            </Link>
            <Link href="/shop">
              <li className="text-2xl py-4 flex  cursor-pointer">Products</li>
            </Link>

            <Link href="/yourlink">
              <li className="text-2xl py-4 flex cursor-pointer">
                Request Link
              </li>
            </Link>

            <Link href="/faq">
              <li className="text-2xl py-4 flex cursor-pointer">FAQs</li>
            </Link>

            <Link href="/contact">
              <li className="text-2xl py-4 flex cursor-pointer">Contact</li>
            </Link>

            <li className="mt-5">
              Improve your online visibility with Reviewtree.io
            </li>
            <ul className="text-center justify-center items-center flex pt-5">
              <Link href="/reviewtree">
                <li className="flex items-center">
                  <Image
                    src={reviewtreeicon}
                    height={20}
                    width={20}
                    alt="Reviewtree"
                    className=""
                  />
                  io/reviewtree
                </li>
              </Link>
            </ul>
          </ul>
        </nav>
      </div>
      {/* Left side */}
      <div className="flex items-center xl:hidden">
        <div
          onClick={() => setNav(!nav)}
          className="flex items-center mr-2 cursor-pointer duration-300 fade-in"
        >
          <RxHamburgerMenu size={30} className="" />
        </div>
        <div className="flex items-center mr-3 cursor-pointer duration-300 fade-in">
          <ShopHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
