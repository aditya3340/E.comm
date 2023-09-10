import React from "react";
import heroImg from "../assets/hero.png";
import shirt from "../assets/shirt.png";
import shoes from "../assets/shoes.png";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="mt-10 md:flex md:flex-col">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-8xl md:text-start md:max-w-[60%] ">
            REVEL YOUR EDGINESS
          </h1>
          <button
            type="button"
            className="text-white py-3 rounded text-lg font-semibold my-5 bg-blackText hover:bg-primary-700 hover:shadow-lg hover:shadow-blackText/40 w-[100%] md:max-w-[40%]"
          >
            <h1>SHOP NOW</h1>
          </button>
        </div>
        <div className="hidden md:flex md:w-[100%]">
          <img src={heroImg} alt="hero_image" />
        </div>
      </div>
      <section className="md:flex justify-between mt-10">
        <div className="mb-5 flex flex-col ">
          <img src={shirt} alt="sale" />
          <h1 className="bg-blackText/70 text-white font-semibold">
            Get 40% OFF on your first order
          </h1>
        </div>
        <div className="mb-5 flex flex-col rounded">
          <img src={shoes} alt="latest fashion" />
          <h1 className="bg-blackText/70 text-white font-semibold">
            Latest Fashion
          </h1>
        </div>
      </section>
    </>
  );
};

export default Hero;
