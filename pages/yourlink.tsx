import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";
import LinkForm from "@/components/LinkForm";
import ContactForm from "@/components/Quote";
import React from "react";

const yourlink = () => {
  return (
    <>
      <Header />
      <div className="justify-center w-full   lg:mx-auto text-center pt-48 font-bold">
        <h1 className="text-3xl xl:text-5xl ">Claim your link</h1>
        <div className="max-w-xl justify-center mx-auto mt-10">
          <LinkForm />
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default yourlink;
