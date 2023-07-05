import Image from "next/image";
import Marquee from "react-fast-marquee";
import ibis from "../public/ibis.png";
import mambo from "../public/mambo.jpg";
import mamasan from "../public/mamasan.png";
import marriot from "../public/unnamed.jpg";
import floor17 from "../public/floorroof.jpg";
import crown from "../public/goldencrown.jpg";
import melia from "../public/images.png";
import mamapizza from "../public/mamapizza.png";
import thuisbezorgd from "../public/thuisbezorgd.png";

const ImageSlider = () => {
  return (
    <Marquee>
      <div className="select-none text-5xl gap-10 flex flex-row">
        <div>
          <Image
            src={ibis}
            height={250}
            width={250}
            alt="mamasan"
            className="rounded-xl ml-5 bg-white"
          />
        </div>
        <div>
          <Image
            src={mambo}
            height={250}
            width={250}
            alt="mamasan"
            className="rounded-xl"
          />
        </div>
        <div>
          <Image
            src={floor17}
            height={250}
            width={250}
            alt="mamasan"
            className="rounded-xl"
          />
        </div>
        <div>
          <Image
            src={thuisbezorgd}
            height={250}
            width={250}
            alt="mamasan"
            className="rounded-xl"
          />
        </div>
        <div>
          <Image
            src={marriot}
            height={250}
            width={250}
            alt="mamasan"
            className="rounded-xl"
          />
        </div>
        <div>
          <Image
            src={mamasan}
            height={250}
            width={250}
            alt="mamasan"
            className="rounded-xl"
          />
        </div>
        <div>
          <Image
            src={mamapizza}
            height={250}
            width={250}
            alt="mamasan"
            className="rounded-xl"
          />
        </div>
        <div>
          <Image
            src={crown}
            height={250}
            width={250}
            alt="mamasan"
            className="rounded-xl"
          />
        </div>
        <div>
          <Image
            src={melia}
            height={250}
            width={250}
            alt="mamasan"
            className="rounded-xl"
          />
        </div>
      </div>
    </Marquee>
  );
};

export default ImageSlider;
