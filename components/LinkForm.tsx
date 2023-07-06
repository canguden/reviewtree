import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import { BsCheck } from "react-icons/bs";

export default function LinkForm() {
  const [state, handleSubmit] = useForm("xdorokgw");

  if (state.succeeded) {
    return (
      <>
        <div className="justify-center place-content-center flex">
          <BsCheck className="text-green-500" size={50} />
        </div>
        <h1 className="text-2xl font-bold mb-5">
          Your claim has been successful
        </h1>
        <p className="font-bold">
          Please provide the following details to start your order:
        </p>
        <div className="flex flex-col text-center justify-center place-content-center mt-5">
          <p>1. Company logo</p>
          <p>2. Links to your preferred review websites</p>
          <p>3. White/Gradient Background color</p>
        </div>
        <h1 className="mt-5">Send to:</h1>
        <Link
          href="mailto:logo@reviewtree.io"
          target="_blank"
          className="text-blue-500 ml-1 underline text-xl underline-offset-8"
        >
          info@reviewtree.io
        </Link>
        <p className="mt-5 text-xs">
          *After receiving the details, the order will take max 24hrs to
          deliver.
        </p>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col  items-center mx-4 ">
      <div className="flex flex-row items-center text-sm">
        <label htmlFor="full-name" className="mr-5"></label>
        <p>
          <span className="text-gray-700">https://reviewtree.io/</span>
        </p>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="yourlink"
          className=" rounded-full shadow-md max-w-xl py-2 mx-2 px-2 mt-5 mb-5 outline-none"
        />
      </div>

      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="ml-5 bg-green-500 text-white rounded-full pt-5  py-4 px-5 max-w-xl hover:bg-slate-600"
        type="submit"
        disabled={state.submitting}
      >
        Create Link
      </button>
    </form>
  );
}
