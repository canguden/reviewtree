import { NextPage } from "next";

const Success: NextPage = () => {
  return (
    <>
      <div>
        <h1>Your order was successful!</h1>
        <form
          action="https://formspree.io/f/xleyerab"
          method="POST"
          encType="multipart/form-data"
        >
          <label>
            Your email:
            <input type="email" name="email" />
          </label>
          <label>
            Upload your Logo,{" "}
            <span className="text-xs">Formats- .jpg .jpeg. .png:</span>
            <input type="file" name="upload" />
          </label>
          <button type="submit">Send Logo</button>
        </form>
      </div>
    </>
  );
};

export default Success;
