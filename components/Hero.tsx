import Image from "next/image";
import React from "react";
import hero from "../public/heroimg.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" px-4 items-center w-full mx-auto bg-blue-200 md:h-[1000px] xl:h-[1041px]  ">
      <div className="pt-64 xl:pt-96 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="text-4xl  font-bold lg:text-8xl text-black">
          <h1>Boost your reviews</h1>
          <p className="text-lg mt-5 font-semibold">
            Join 50.000+ companies using Reviewtree. One link to help you gain
            more reviews.
          </p>
          <Link href="/yourlink">
            <button className="bg-slate-700 mt-5 py-5 px-5 rounded-full text-lg text-white font-semibold">
              Get started for free 🚀
            </button>
          </Link>
        </div>
        <div className="text-4xl mr-10 -mt-10 xl:-mt-36 lg:text-8xl text-purple-400">
          <Image
            src={hero}
            height={700}
            width={700}
            alt="logo"
            className="fixed-element mx-5 select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
