import Image from "next/image";
import React from "react";
import logo from "../public/logo.svg";
import reviewtreeicon from "../public/reviewtreeicon.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="max-w-[1600px] lg:mx-auto mx-4 mt-48 justify-center text-center items-center bg-white shadow-xl rounded-tr-xl rounded-tl-xl gap-16 pb-28">
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
            <Link href="/shop">
              <li className="py-4 px-5 cursor-pointer hover:bg-slate-200 hover:rounded-xl hover:py-4 hover:px-5 duration-300">
                Products
              </li>
            </Link>
            <div className="lg:hidden border-2 border-green-100  mt-5 mb-5 max-w-7xl mx-auto"></div>
            <Link href="/yourlink">
              <li className="py-4 px-5 cursor-pointer hover:bg-slate-200 hover:rounded-xl hover:py-4 hover:px-5 duration-300">
                Request link
              </li>
            </Link>
            <div className="lg:hidden border-2 border-green-100  mt-5 mb-5 max-w-7xl mx-auto"></div>
            <Link href="/contact">
              <li className="py-4 px-5 cursor-pointer hover:bg-slate-200 hover:rounded-xl hover:py-4 hover:px-5 duration-300">
                Contact
              </li>
            </Link>
            <div className="lg:hidden border-2 border-green-100  mt-5 mb-5 max-w-7xl mx-auto"></div>
            <Link href="/faq">
              <li className="py-4 px-5 cursor-pointer hover:bg-slate-200 hover:rounded-xl hover:py-4 hover:px-5 duration-300">
                FAQs
              </li>
            </Link>
            <div className="lg:hidden border-2 border-green-100  mt-5 max-w-7xl mx-auto"></div>
          </ul>
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
        </div>
      </div>
    </>
  );
};

export default Footer;
