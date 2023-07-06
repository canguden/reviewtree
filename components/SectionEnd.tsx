import React from "react";
import { FaApple } from "react-icons/fa";
import end from "../public/endimg.png";
import Image from "next/image";
import Link from "next/link";

const SectionEnd = () => {
  return (
    <div className=" w-full  pt-10 xl:pt-32  rounded-xl mx-5 sm:mx-auto">
      <div className=" max-w-7xl items-center mx-auto grid grid-cols-1 sm:grid-cols-2  lg:gap-32">
        <div className="text-4xl font-bold lg:text-8xl text-black">
          <h1>Explore our plans</h1>
          <ul className="flex flex-col text-lg font-semibold mt-10 gap-2">
            <li className="flex">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Link & Profile{" "}
              <span className="text-xs items-center text-white rounded-full ml-2 py-2 px-5 bg-emerald-500">
                Free
              </span>
            </li>
            <li className="flex">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Fully Customizable
              <span className="text-xs items-center  rounded-full ml-2 py-2 px-5 text-white bg-slate-700">
                Pro
              </span>
            </li>
            <li className="flex">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Analytics
              <span className="text-xs items-center  rounded-full ml-2 py-2 px-5 text-white bg-slate-700">
                Pro
              </span>
            </li>
            <li className="flex">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Reviewcards
              <span className="text-xs items-center  rounded-full ml-2 py-2 px-5 text-white bg-slate-700">
                Pro
              </span>
            </li>
            <li className="flex">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              AI Review Generator
              <span className="text-xs items-center  rounded-full ml-2 py-2 px-5 text-white bg-slate-700">
                Pro
              </span>
            </li>
          </ul>
          <Link href="/">
            <button className="bg-green-300 mt-5 py-5 px-5 rounded-full text-lg text-black font-semibold">
              Contact us
            </button>
          </Link>
        </div>
        <div className="text-4xl -mt-10 mr-10 lg:-mt-12 lg:text-8xl">
          <Image
            src={end}
            height={400}
            width={400}
            alt="logo"
            className="fixed-element lg:pt-20 mx-5 select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionEnd;
