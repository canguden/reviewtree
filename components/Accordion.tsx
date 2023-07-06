import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import minus from "../public/minus.svg";
import plus from "../public/plus.svg";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

type Props = {
  question: string;
  answer: string;
  turn: boolean[];
  setTurn: Dispatch<SetStateAction<boolean[]>>;
  idx: number;
};

const Accordion = ({ question, answer, turn, setTurn, idx }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = turn![idx]
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [contentRef, turn, idx]);

  const toggleAccordion = () => {
    let newTurn = [...turn!];
    newTurn[idx] = !newTurn[idx];
    setTurn!(newTurn);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full px-2 text-xl pt-4 ">
      <button
        onClick={toggleAccordion}
        className={`bg-transparent rounded-xl px-5 shadow-md cursor-pointer w-full h-full ${
          turn![idx]
        }`}
      >
        <div className="py-3">
          <div className="flex items-center justify-between h-14 text-left">
            <span className="ml-2 font-medium lg:font-semibold  text-xl text-black">
              {question}
            </span>
            <div>{turn![idx] ? <FaAngleUp /> : <FaAngleDown />}</div>
          </div>
          <div
            ref={contentRef}
            className="mx-4 overflow-hidden text-left transition-all duration-300 h-full"
          >
            <p className="py-1 font-normal leading-normal  whitespace-pre-line text-lg lg:text-xl">
              {answer}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Accordion;
