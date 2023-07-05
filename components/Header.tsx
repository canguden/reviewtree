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
    <div className=" max-w-[1400px] z-50 mx-5 xl:mx-auto  flex justify-between items-center h-[75px] lg:h-[80px] bg-slate-100 rounded-full mt-10 shadow-xl">
      <div className="flex max-w-5xl  mx-1 lg:mx-10 justify-between flex-row items-center uppercase text-xl font-extrabold">
        <Link href="/" className="flex flex-row">
          <Image
            src={logo}
            height={200}
            width={200}
            alt="logo"
            className="fixed-element mx-5"
          />
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

          <Link href="/contact">
            <li className="text-md font-bold ml-6 flex  py-4 px-5 cursor-pointer hover:bg-slate-200 hover:rounded-xl hover:py-4 hover:px-5 duration-300">
              Pricing
            </li>
          </Link>

          <Link href="/contact">
            <li className="text-md font-bold ml-6 flex py-4 px-5 cursor-pointer hover:bg-slate-200 hover:rounded-xl hover:py-4 hover:px-5 duration-300">
              {" "}
              Support
            </li>
          </Link>
          <Link href="/yourlink">
            <li className="text-md ml-6 font-bold  flex  py-4 px-5 cursor-pointer">
              <button className="bg-slate-700 py-4 px-5 rounded-full hover:bg-slate-800 duration-300 text-white">
                Request Link
              </button>
            </li>
          </Link>
          <li className="text-md ml-6 font-bold  flex  py-4 px-5 cursor-pointer">
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
            ? "fixed top-0 right-0 w-[400px] h-screen bg-emerald-400 z-10 duration-300 xl:hidden"
            : "fixed top-0 right-[-100%] w-[400px] h-screen bg-green-400 z-10 duration-300 xl:hidden"
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
              <li className="text-2xl py-4 flex  cursor-pointer hover:underline hover:decoration-white hover:underline-offset-4 duration-300">
                Home
              </li>
            </Link>
            <Link href="/shop">
              <li className="text-2xl py-4 flex  cursor-pointer hover:underline hover:decoration-white hover:underline-offset-4 duration-300">
                Products
              </li>
            </Link>

            <Link href="/">
              <li className="text-2xl py-4 flex cursor-pointer   duration-300">
                Pricing
              </li>
            </Link>
            <Link href="/">
              <li className="text-2xl py-4 flex mb-3 cursor-pointer hover:underline hover:decoration-white hover:underline-offset-4 duration-300">
                Support
              </li>
            </Link>

            <li>Improve your online visibility with Reviewtree.io</li>
            <li className="flex flex-row gap-6 mt-3 ">
              <Link
                href="https://facebook.com/vakantiescout"
                target="_blank"
                className="hover:text-blue-700"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/vakantiescout"
                target="_blank"
                className="hover:text-blue-700"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/vakantiescout"
                target="_blank"
                className="hover:text-blue-700"
              >
                <FaTwitter className="h-5 w-5" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Left side */}
      <div className="flex items-center xl:hidden">
        <div
          onClick={() => setNav(!nav)}
          className="flex items-center mr-5 cursor-pointer duration-300 fade-in"
        >
          <RxHamburgerMenu size={30} className="" />
          <ShopHeader />
        </div>
      </div>
    </div>
  );
};

export default Header;
