import Image from "next/image";
import React, { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import logo from "../public/reviewtreeicon.svg";
import google from "../public/google.png";
import trustpilot from "../public/trustpilot.jpg";
import Link from "next/link";
import dynamic from "next/dynamic";

const reviewtree = () => {
  const [reviewText, setReviewText] = useState("");
  const [showReview, setShowReview] = useState(false);

  const textToCopy =
    "Reviewtree is an exceptional platform that empowers businesses to gather valuable reviews and enhance customer loyalty. With Reviewtree, you can effortlessly collect genuine feedback from your customers, allowing you to gain valuable insights and improve your products and services. The platform provides an intuitive and user-friendly interface, making it easy for your customers to share their experiences and opinions. By leveraging the power of Reviewtree, you can strengthen your brand reputation, increase customer trust, and establish long-lasting relationships with your audience. Experience the benefits of Reviewtree and unlock a world of possibilities for your business growth and success.";

  const CopyClipboard = dynamic(
    () =>
      import("../components/CopyClipboard").then((mod) => mod.CopyClipboard),
    { ssr: false }
  );

  const generateReview = () => {
    // Generate the dummy review text
    const dummyReview =
      "Reviewtree is an exceptional platform that empowers businesses to gather valuable reviews and enhance customer loyalty. With Reviewtree, you can effortlessly collect genuine feedback from your customers, allowing you to gain valuable insights and improve your products and services. The platform provides an intuitive and user-friendly interface, making it easy for your customers to share their experiences and opinions. By leveraging the power of Reviewtree, you can strengthen your brand reputation, increase customer trust, and establish long-lasting relationships with your audience. Experience the benefits of Reviewtree and unlock a world of possibilities for your business growth and success.";

    setReviewText(dummyReview);
    setShowReview(true);
  };

  return (
    <>
      <div className="bg-gradient-to-t from-green-200 to-green-300 via-green-200 min-h-screen pt-10 w-full mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="sticky top-10 bg-white/30 backdrop-blur-3xl max-w-2xl z-50 mx-5 xl:mx-auto  flex justify-center items-center h-[75px] lg:h-[70px] bg-slate-100 rounded-full mt-5 shadow-sm">
            <div className="justify-center items-center text-center"></div>
            <Link href="/">
              <Image
                src={logo}
                height={100}
                width={100}
                alt="logo"
                className="border-slate-500 bg-black shadow-md border w-14 h-14 rounded-full"
              />
            </Link>
          </div>

          <div className="max-w-[600px] text-black font-bold mx-5 justify-center items-center flex text-center mt-20 xl:mx-auto flex-col">
            <h1 className="text-4xl italic mb-10">
              Your feedback matters to us!
            </h1>
            <h1>Generate your review with AI and save time.</h1>
            <button
              onClick={generateReview}
              className="bg-pink-200 mt-5 py-4 px-5 rounded-full"
            >
              Generate review
            </button>
            {showReview && (
              <div className="border-4 border-pink-300 mt-5 text-start py-5 px-5">
                <p>{reviewText}</p>
              </div>
            )}
            {showReview && (
              <div className="flex flex-row items-center gap-2 mt-5 py-3 px-3 bg-pink-200 rounded-xl">
                <CopyClipboard content={textToCopy} />
              </div>
            )}
          </div>
          <div className="max-w-[600px] mx-5 justify-center items-center flex text-center mt-20 xl:mx-auto ">
            <ul className="text-black w-full mx-4 sm:mx-auto">
              <Link href="/deals" target="_blank">
                <li className=" bg-white rounded-xl py-4   mb-5">
                  <div className="flex flex-row grow justify-between mx-2">
                    <div className="flex flex-row items-center ">
                      <Image
                        src={google}
                        height={500}
                        width={500}
                        alt="logo"
                        className="w-14 h-14 outline-none"
                      />
                      <h1 className="text-3xl lg:text-4xl ml-3">
                        Google reviews
                      </h1>
                    </div>
                    <div className="flex flex-row gap-2 px-2">
                      <h1 className="font-bold text-6xl ">4.8</h1>
                    </div>
                  </div>
                  <div className="justify-between items-center flex flex-row px-2 gap-4 mt-5">
                    <div className="flex flex-row gap-2 px-2">
                      <button className="bg-blue-500 hover:bg-blue-600 font-bold  text-xl  rounded-md py-3 px-3  items-center  text-white">
                        Leave review
                      </button>
                    </div>
                    <div className="flex flex-row gap-2 px-2">
                      <BsStarFill className="text-yellow-400  mt-2 w-8 h-8" />
                      <BsStarFill className="text-yellow-400 mt-2 w-8 h-8" />
                      <BsStarFill className="text-yellow-400  mt-2 w-8 h-8" />
                      <BsStarFill className="text-yellow-400 mt-2 w-8 h-8" />
                      <BsStarFill className="text-gray-300  mt-2 w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex justify-end px-4 underline text-gray-700 text-xl -mt-2">
                    <p>1943 reviews</p>
                  </div>
                </li>
              </Link>
              <Link href="/deals" target="_blank">
                <li className=" bg-[#000032] rounded-xl py-4   mb-5">
                  <div className="flex flex-row grow justify-between mx-2">
                    <div className="flex flex-row items-center ">
                      <Image
                        src={trustpilot}
                        height={500}
                        width={500}
                        alt="logo"
                        className="w-14 h-14 outline-none"
                      />
                      <h1 className="text-3xl text-gray-100 lg:text-4xl ml-3">
                        Trustpilot
                      </h1>
                    </div>
                    <div className="flex flex-row gap-2 px-2">
                      <h1 className="font-bold text-gray-100 text-6xl ">5.0</h1>
                    </div>
                  </div>
                  <div className="justify-between items-center flex flex-row px-2 gap-4 mt-5">
                    <div className="flex flex-row gap-2 px-2">
                      <button className="bg-emerald-600 hover:bg-emerald-700 font-bold items-center text-xl  rounded-md py-3 px-3 text-white">
                        Leave review
                      </button>
                    </div>
                    <div className="flex flex-row gap-2 px-2">
                      <BsStarFill className="text-green-400  mt-2 w-8 h-8" />
                      <BsStarFill className="text-green-400 mt-2 w-8 h-8" />
                      <BsStarFill className="text-green-400  mt-2 w-8 h-8" />
                      <BsStarFill className="text-green-400 mt-2 w-8 h-8" />
                      <BsStarFill className="text-green-400  mt-2 w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex justify-end px-4 underline text-gray-100 text-xl -mt-2">
                    <p>283 reviews</p>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default reviewtree;
