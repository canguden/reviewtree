import { NextPage } from "next";
import Link from "next/link";

const Cancel: NextPage = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl max-w-4xl">Your order was cancelled</h1>
        <Link href="/">Back Home</Link>
      </div>
    </>
  );
};

export default Cancel;
