import Footer2 from "@/components/Footer2";
import Header from "@/components/Header";
import ContactForm from "@/components/Quote";
import React from "react";

const link = () => {
  return (
    <>
      <Header />
      <div>
        <div className="max-w-7xl px-2 mx-auto mt-20">
          <h1 className="text-2xl text-center mb-20 lg:text-4xl font-semibold">
            Claim your Reviewtree Link now, for{" "}
            <span className="italic text-green-500">Free</span>
          </h1>
          <div className="grid grid-cols-1 xl:grid-cols-2">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default link;
