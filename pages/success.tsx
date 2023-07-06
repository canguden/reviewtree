import Header from "@/components/Header";
import { NextPage } from "next";
import Link from "next/link";
import { BsCheck } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

const Success: NextPage = () => {
  return (
    <>
      <Header />
      <div className="mx-2 bg-slate-100 py-10 px-10 shadow-xl max-w-xl xl:mx-auto mt-48 text-center">
        <div className="justify-center place-content-center flex">
          <BsCheck className="text-green-500" size={50} />
        </div>
        <h1 className="text-2xl font-bold mb-5">
          Your order has been successful
        </h1>
        <p className="font-bold">
          Please provide the following details to start your order:
        </p>
        <div className="flex flex-col text-start justify-center place-content-center mt-5">
          <p>1. Links to your preferred review websites</p>
          <p>2. Your reviewtree link if applicable</p>
          <p>3. Company logo</p>
        </div>
        <h1>Send to:</h1>
        <Link
          href="mailto:logo@reviewtree.io"
          target="_blank"
          className="text-blue-500 ml-1 underline text-xl underline-offset-8"
        >
          logo@reviewtree.io
        </Link>
        <Link
          href="/"
          className="mt-10 mr-1 text-xl gap-2 flex items-center justify-center"
        >
          Back to Home{" "}
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
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
        <p className="mt-5 text-xs">
          *After receiving the details, the order will take max 14 days to
          deliver.
        </p>
      </div>
    </>
  );
};

export default Success;
