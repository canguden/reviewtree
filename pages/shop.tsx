import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Stripe from "stripe";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import ContactForm from "@/components/Quote";
import Footer2 from "@/components/Footer2";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2022-11-15",
  });

  const response = await stripe.prices.list({
    limit: 10,
    expand: ["data.product"],
  });

  const prices = response.data.filter((price) => {
    return price.active;
  });

  return {
    props: {
      prices,
    },
  };
};

type Props = {
  prices: Stripe.Price[];
};

const Shop: NextPage<Props> = ({ prices }: { prices: Stripe.Price[] }) => {
  return (
    <>
      <div className="top-10 z-50 sticky">
        <Header />
      </div>
      <main className=" min-h-screen">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h1 className="font-semibold tracking-wide leading-10 text-xl lg:text-3xl">
              Shop Now
            </h1>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            {prices.map((p) => (
              <ProductCard key={p.id} price={p} />
            ))}
          </div>
          <div className="mt-20">
            <div className="max-w-7xl">
              <h1 className="text-xl leading-10 tracking-wide font-semibold lg:text-3xl">
                Get a Quote
              </h1>
              <div className="max-w-7xl">
                <hr className="mt-4 w-full" />
              </div>
              <p className="text-xl mt-5">
                Unlock exclusive B2B benefits with our products, including
                special discounts on large orders. Simply fill out the form, and
                our team will promptly get in touch with you to discuss your
                specific needs and provide personalized assistance. Maximize
                your business&apos;s potential with our cutting-edge solution
                and take a step towards enhancing your online presence and
                increasing customer engagement.
              </p>
              <hr className="mt-5 mb-5" />
            </div>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer2 />
    </>
  );
};

export default Shop;
