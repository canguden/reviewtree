import Header from "@/components/Header";
import { NextPage } from "next";
import Link from "next/link";

const Cancel: NextPage = () => {
  return (
    <>
      <Header />
      <div className="mx-2 bg-slate-100 py-10 px-10 shadow-xl max-w-xl xl:mx-auto mt-48 text-center">
        <div className="">
          <h1 className="text-2xl mb-5">
            Sorry, your order has been cancelled
          </h1>
          <p>
            If you feel this is an error, please contact our{" "}
            <Link href="/support" className="text-blue-500 underline">
              support team
            </Link>
          </p>
          <Link
            href="/shop"
            className="mt-5 mr-1 text-xl gap-2 flex items-center justify-center"
          >
            Continue shopping{" "}
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
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cancel;
