import React from "react";
import beverage from "./beverages.jpg";
import liquor from "./liquor.jpg";
import chop from "./chop.jpg";
import meat from "./meat.jpg";
import pasta from "./pasta.jpg";
import rice from "./rice.jpg";
import noodle from "./noodle.jpg";
import snack from "./snack.jpg";
import seafood from "./seafood.jpg";
import takeaway from "./takeaway.jpg";

import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useState } from "react";

export default function Slider() {
  const slides = [
    beverage,
    liquor,
    chop,
    meat,
    pasta,
    rice,
    noodle,
    snack,
    seafood,
    takeaway,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const previwSlide = () => {
    const isfirstSlide = currentIndex === 0;
    const newIndex = isfirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="group relative flex h-[200px] w-[200px] justify-center gap-5 duration-500 ">
      <img
        src={slides[currentIndex]}
        alt="beve"
        className="rounded-full shadow-2xl "
      />
      <img
        src={slides[currentIndex + 1]}
        alt="beve"
        className="rounded-full shadow-2xl "
      />
      <img
        src={slides[currentIndex + 2]}
        alt="beve"
        className="rounded-full shadow-2xl "
      />

      <div className="absolute left-1 top-[50%] hidden translate-x-0 translate-y-[-50] group-hover:block">
        <MdOutlineArrowBackIos onClick={previwSlide} size="2rem" />
      </div>

      <div className="absolute right-1 top-[50%] hidden translate-x-0 translate-y-[-50] group-hover:block">
        <MdOutlineArrowForwardIos onClick={nextSlide} size="2rem" />
      </div>
    </div>
  );
}
