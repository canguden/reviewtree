import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";
import ContactForm from "@/components/Quote";
import React from "react";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="justify-center w-full   lg:mx-auto text-center pt-48 font-bold">
        <h1 className="text-3xl xl:text-5xl ">Contact us</h1>
        <div className="max-w-xl justify-center text-start mx-auto mt-10">
          <ContactForm />
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Contact;
