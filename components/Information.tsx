import React from "react";
import { FaApple } from "react-icons/fa";
import info from "../public/infoimg.png";
import Image from "next/image";
import Link from "next/link";

const Information = () => {
  return (
    <div className=" w-full  pt-20 xl:pt-32  rounded-xl  lg:mx-auto">
      <div className=" max-w-7xl items-center mx-auto grid grid-cols-1 lg:grid-cols-2 xl:gap-32">
        <div className="text-4xl mr-10 lg:-mt-36 lg:text-8xl">
          <Image
            src={info}
            height={700}
            width={700}
            alt="logo"
            className="fixed-element pt-12 mx-5 select-none"
          />
        </div>
        <div className="text-4xl font-bold lg:text-8xl text-black">
          <h1>Elevate your online visibility!</h1>
          <p className="text-lg mt-5 font-semibold">
            The ultimate platform that empowers your customers/guests to leave
            reviews on any review platform you prefer. Unlock greater reach,
            visibility, insights, and sales potential with our innovative
            solution.
          </p>
          <Link href="/yourlink">
            <button className="bg-purple-200 mt-5 py-3 px-3 rounded-full text-lg text-black font-semibold">
              I want this 😍
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Information;
