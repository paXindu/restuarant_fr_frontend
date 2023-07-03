import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import heroimage from "./main.jpg";

import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import Slider from "./slider/slider";

export const Home = () => {
  return (
    <div
      class=" relative flex h-screen items-center justify-center  bg-cover bg-right-top bg-no-repeat sm:bg-center  "
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/20">
        <div className="fixed top-0  ">
          <Navbar />
        </div>

        <section class="sm:mt-30 mt-[108px]  text-center   ">
          <h1 className=" max-auto font-Neucha-font text-3xl sm:text-[3rem]">
            Welcome to Savinlan Food Hut..!
          </h1>
          <p class=" mt-5 text-center font-Neucha-font text-lg italic sm:text-2xl">
            It's not just Food,It's an Experience
          </p>
          <div className="  ">
            <div className="  mt-8 flex justify-center gap-5">
              <FiPhoneCall size="2rem" />
              <BsWhatsapp size="2rem" />
            </div>
            <div className=" mt-5 flex  justify-center gap-2  font-Gilroy-Light text-2xl  sm:bg-opacity-0">
              <a href="tel:0768576943" class="">
                0768576943
              </a>
              <br />
              <a href="tel:0760493731"> 0760493731 </a>
            </div>
          </div>
          <button className="mt-5 rounded-full bg-[#ffca40] p-4 font-Gilroy-Bold outline-1 focus:bg-white sm:hover:bg-white">
            Order Food
          </button>
        </section>

        <div class="relative flex items-center justify-center">
          <div className="absolute top-11    ">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};
