import React from "react";
import { FaApple } from "react-icons/fa";
import reviewcard from "../public/reviewcard.png";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
import Link from "next/link";
import LinkForm from "./LinkForm";

const SectionDemo = () => {
  return (
    <>
      <div className=" w-full  xl:pt-48  rounded-xl px-5 lg:mx-auto">
        <div className=" max-w-7xl items-center mx-auto grid grid-cols-1 lg:grid-cols-2 xl:gap-32 ">
          <div className="text-4xl mr-10 lg:-mt-36 rounded-xl lg:text-8xl items-center">
            <Image
              src={reviewcard}
              height={700}
              width={700}
              alt="logo"
              className="fixed-element rounded-full items-center pt-12 mx-5 pr-20 select-none"
            />
          </div>
          <div className="mt-10 text-4xl font-bold xl:text-8xl text-black">
            <h1>
              Our fully customizable{" "}
              <span className="italic text-green-400">Reviewcards</span>
            </h1>
            <p className="text-lg max-w-xs sm:max-w-full mt-5 font-semibold">
              Experience the power of our tools by scanning the QR code or
              clicking the demo link below.
            </p>
            <div className="mt-5 mb-5 font-semibold">
              <Link href="/reviewtree">
                <p className="text-blue-500 text-2xl mt-2 hover:underline hover:underline-offset-4">
                  reviewtree.io/reviewtree
                </p>
              </Link>
            </div>
            <Link href="/shop">
              <button className="bg-slate-700 mt-10 py-3 px-3 rounded-full text-lg text-white font-semibold">
                Visit shop
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-7xl  px-10 lg:mx-auto text-center mt-32 font-bold text-3xl xl:text-5xl">
          <h1>The best review tool trusted by 50k+</h1>
        </div>
        <div className="w-full mt-20 mb-20 ">
          <ImageSlider />
        </div>
      </div>
    </>
  );
};

export default SectionDemo;
