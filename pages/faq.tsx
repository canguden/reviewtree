import React, { useState } from "react";
import data from "../data.json";
import Layout from "../components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Faq() {
  const [active, setActive] = useState([false, false, false, false, false]);

  const isSomeActive = active.some((element) => element);

  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false, false])
      : setActive([true, true, true, true, true]);
  };

  return (
    <>
      <Header />
      <div className="mt-20 mb-20 grid place-items-center w-full">
        <Layout
          handleClick={handleClick}
          isSomeActive={isSomeActive}
          data={data}
          turn={active}
          setTurn={setActive}
        />
      </div>
      <div className="mt-48">
        <Footer />;
      </div>
    </>
  );
}
