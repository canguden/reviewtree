import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xleyerab");

  if (state.succeeded) {
    return (
      <p className="font-bold bg-green-200 rounded-full max-w-xl py-4 px-5 mt-5">
        Thanks for your submission, we will contact you as soon as possible!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="full-name">Full Name</label>
      <input
        type="text"
        name="name"
        id="full-name"
        placeholder="Name"
        className="border rounded-full max-w-xl py-2 px-4 mt-5 mb-5"
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your email"
        className="border rounded-full max-w-xl py-2 px-4 mt-5"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <p className="mt-5">Extra information</p>
      <textarea
        id="message"
        name="message"
        className="border-2 max-w-xl h-[150px] mt-5 rounded-xl px-4 py-2"
      />

      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="bg-slate-500 text-white rounded-full mt-5  py-4 px-5 max-w-xl hover:bg-slate-600"
        type="submit"
        disabled={state.submitting}
      >
        Get quote
      </button>
    </form>
  );
}
