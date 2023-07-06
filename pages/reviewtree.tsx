import Image from "next/image";
import React, { useState } from "react";
import { BsArrowLeft, BsCircleFill, BsStar, BsStarFill } from "react-icons/bs";
import logo from "../public/reviewtreeicon.svg";
import google from "../public/google.png";
import tripadvisor from "../public/tripadvisor.jpg";
import trustpilot from "../public/trustpilot.jpg";
import Link from "next/link";
import dynamic from "next/dynamic";

const Reviewtree = () => {
  const [reviewText, setReviewText] = useState("");
  const [showReview, setShowReview] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for loader

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

    setIsLoading(true); // Show the loader

    setTimeout(() => {
      setReviewText(dummyReview);
      setShowReview(true);
      setIsLoading(false); // Hide the loader
    }, 1000);
  };

  return (
    <>
      <div className="bg-gradient-to-t from-green-200 to-green-300 via-green-200 min-h-screen pt-10 w-full mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="flex pt-5">
            <Link href="/" className="flex">
              <BsArrowLeft className="w-10 h-6" /> Back home
            </Link>
          </div>
          <div className="sticky top-10 bg-green-200 backdrop-blur-2xl max-w-2xl z-50 mx-5 xl:mx-auto  flex justify-center items-center h-[60px] lg:h-[60px]  rounded-full mt-5 shadow-sm">
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
          <div className="max-w-2xl mx-auto  justify-center items-center text-center mt-4">
            <h1 className="text-gray-700 font-bold text-2xl">@reviewtree</h1>
            <p className="mt-2 ">
              Effortlessly gather and manage reviews with ease
            </p>
          </div>
          <div className="max-w-2xl text-black font-bold mx-5 justify-center items-center flex text-center mt-20 xl:mx-auto flex-col">
            <h1 className="text-4xl italic mb-10">
              Your feedback matters to us!
            </h1>
            <h1>Generate your review with AI and save time.</h1>
            <button
              onClick={generateReview}
              className="bg-pink-200 mt-5 py-4 px-5 rounded-full"
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full animate-bounce mx-1"></div>
                  <div className="w-2 h-2 bg-black rounded-full animate-bounce mx-1"></div>
                  <div className="w-2 h-2 bg-black rounded-full animate-bounce mx-1"></div>
                </div>
              ) : (
                "Generate review"
              )}
            </button>
            {showReview && (
              <div className="border-4 border-pink-300 mt-5 font-semibold text-start text-sm text-gray-600 py-5 px-5">
                <p>{reviewText}</p>
              </div>
            )}
            {showReview && (
              <div className="flex flex-row text-xl items-center gap-2 mt-5 py-3 px-3 bg-pink-200 rounded-xl">
                <CopyClipboard content={textToCopy} />
              </div>
            )}
          </div>
          <div className="max-w-[600px] pb-20 mx-5 justify-center items-center flex text-center mt-20 xl:mx-auto ">
            <ul className="text-black w-full mx-4 sm:mx-auto">
              <Link href="/deals" target="_blank">
                <li className=" bg-white rounded-xl py-4 mb-10">
                  <div className="flex flex-row grow justify-between mx-2">
                    <div className="flex flex-row items-center ">
                      <Image
                        src={google}
                        height={500}
                        width={500}
                        alt="logo"
                        className="w-14 h-14 outline-none"
                      />
                      <h1 className="text-xl lg:text-4xl ml-3">
                        Google Reviews
                      </h1>
                    </div>
                    <div className="flex flex-row gap-2 px-2">
                      <h1 className="font-bold text-6xl ">4.8</h1>
                    </div>
                  </div>
                  <div className="justify-between items-center flex flex-row px-2 gap-4 mt-5">
                    <div className="flex flex-row gap-2 px-2">
                      <button className="bg-blue-500 hover:bg-blue-600 font-semibold text-md  rounded-md py-2 px-2  items-center  text-white">
                        Leave review
                      </button>
                    </div>
                    <div className="flex flex-row gap-2 px-2">
                      <BsStarFill className="text-yellow-400  mt-2 w-5 h-5" />
                      <BsStarFill className="text-yellow-400 mt-2 w-5 h-5" />
                      <BsStarFill className="text-yellow-400  mt-2 w-5 h-5" />
                      <BsStarFill className="text-yellow-400 mt-2 w-5 h-5" />
                      <BsStarFill className="text-gray-300  mt-2 w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex justify-end px-4 underline text-gray-700 text-lg -mt-1">
                    <p>1943 reviews</p>
                  </div>
                </li>
              </Link>
              <Link href="/deals" target="_blank">
                <li className=" bg-[#000032] rounded-xl py-4 mb-10">
                  <div className="flex flex-row grow justify-between mx-2">
                    <div className="flex flex-row items-center ">
                      <Image
                        src={trustpilot}
                        height={500}
                        width={500}
                        alt="logo"
                        className="w-14 h-14 outline-none"
                      />
                      <h1 className="text-xl text-gray-100 lg:text-4xl ml-3">
                        Trustpilot
                      </h1>
                    </div>
                    <div className="flex flex-row gap-2 px-2">
                      <h1 className="font-bold text-gray-100 text-6xl ">5.0</h1>
                    </div>
                  </div>
                  <div className="justify-between items-center flex flex-row px-2 gap-4 mt-5">
                    <div className="flex flex-row gap-2 px-2">
                      <button className="bg-emerald-500 hover:bg-emerald-400 font-semibold items-center text-md  rounded-md py-2 px-2 text-white">
                        Leave review
                      </button>
                    </div>
                    <div className="flex flex-row gap-2 px-2">
                      <BsStarFill className="text-green-400  mt-2 w-5 h-5" />
                      <BsStarFill className="text-green-400 mt-2 w-5 h-5" />
                      <BsStarFill className="text-green-400  mt-2 w-5 h-5" />
                      <BsStarFill className="text-green-400 mt-2 w-5 h-5" />
                      <BsStarFill className="text-green-400  mt-2 w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex justify-end px-4 underline text-gray-100 text-lg -mt-1">
                    <p>283 reviews</p>
                  </div>
                </li>
              </Link>
              <Link href="/" target="_blank">
                <li className=" bg-white rounded-xl py-4 mb-10">
                  <div className="flex flex-row grow justify-between mx-2">
                    <div className="flex flex-row items-center ">
                      <Image
                        src={tripadvisor}
                        height={500}
                        width={500}
                        alt="logo"
                        className="w-14 h-14 outline-none rounded-full"
                      />
                      <h1 className="text-xl text-gray-900 lg:text-4xl ml-3">
                        Tripadvisor
                      </h1>
                    </div>
                    <div className="flex flex-row gap-2 px-2">
                      <h1 className="font-bold text-gray-900 text-6xl ">3.9</h1>
                    </div>
                  </div>
                  <div className="justify-between items-center flex flex-row px-2 gap-4 mt-5">
                    <div className="flex flex-row gap-2 px-2">
                      <button className="bg-[#33E0A1] hover:bg-emerald-500 font-semibold items-center text-md  rounded-md py-2 px-2 text-black">
                        Leave review
                      </button>
                    </div>
                    <div className="flex flex-row gap-2 px-2">
                      <BsCircleFill className="text-[#33E0A1] rounded-full mt-2 w-5 h-5" />
                      <BsCircleFill className="text-[#33E0A1] rounded-full mt-2 w-5 h-5" />
                      <BsCircleFill className="text-[#33E0A1] rounded-full mt-2 w-5 h-5" />
                      <BsCircleFill className="text-[#33E0A1] rounded-full mt-2 w-5 h-5" />
                      <BsCircleFill className="text-white border-4 border-[#33E0A1] rounded-full mt-2 w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex justify-end px-4 underline text-gray-900 text-lg -mt-1">
                    <p>29.083 reviews</p>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
          <div className="max-w-2xl px-2 mx-auto pb-20 justify-center items-center text-center mt-4">
            <h1 className="text-xl font-semibold ">
              Apply now to personalize your link with your unique homestyle!
            </h1>
            <Link href="/yourlink">
              <button className="bg-pink-200 text-black mt-5 font-semibold py-2 px-3 rounded-full">
                Request Link
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviewtree;
