import Image from "next/image";
import React from "react";
import logo from "../public/logo.svg";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="max-w-[1600px] lg:mx-auto mx-5 mt-48 justify-center text-center items-center bg-white shadow-xl rounded-tr-xl rounded-tl-xl gap-16 pb-28">
          <div className="pt-10 pb-5 flex justify-center ">
            <Image
              src={logo}
              height={200}
              width={250}
              alt="Reviewtree"
              className=""
            />
          </div>
          <ul className="text-xl sm:text-lg  gap-16  text-black font-semibold lg:flex lg:flex-row justify-center ">
            <div className="lg:hidden border-2 border-green-100  mb-5 max-w-7xl mx-auto"></div>
            <li className="py-4 px-5 cursor-pointer hover:bg-slate-200 hover:rounded-xl hover:py-4 hover:px-5 duration-300">
              Products
            </li>
            <div className="lg:hidden border-2 border-green-100  mt-5 mb-5 max-w-7xl mx-auto"></div>
            <Link href="/yourlink">
              <li className="py-4 px-5 cursor-pointer hover:bg-slate-200 hover:rounded-xl hover:py-4 hover:px-5 duration-300">
                Request link
              </li>
            </Link>
            <div className="lg:hidden border-2 border-green-100  mt-5 mb-5 max-w-7xl mx-auto"></div>
            <li className="py-4 px-5 cursor-pointer hover:bg-slate-200 hover:rounded-xl hover:py-4 hover:px-5 duration-300">
              Pricing
            </li>
            <div className="lg:hidden border-2 border-green-100  mt-5 mb-5 max-w-7xl mx-auto"></div>
            <Link href="/faq">
              <li className="py-4 px-5 cursor-pointer hover:bg-slate-200 hover:rounded-xl hover:py-4 hover:px-5 duration-300">
                FAQs
              </li>
            </Link>
            <div className="lg:hidden border-2 border-green-100 mt-5 mb-5 max-w-7xl mx-auto"></div>
            <li className="py-4 px-5 cursor-pointer hover:bg-slate-200 hover:rounded-xl hover:py-4 hover:px-5 duration-300">
              Support
            </li>
            <div className="lg:hidden border-2 border-green-100  mt-5 max-w-7xl mx-auto"></div>
          </ul>
          <ul className="text-center justify-center items-center flex">
            <li>
              <FaInstagram className="w-5 h-5 mt-5" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
