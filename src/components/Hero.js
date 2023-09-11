import React, { useState } from "react";
import heroImg from "../assets/hero.png";
import shirt from "../assets/shirt.png";
import shoes from "../assets/shoes.png";

const Hero = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <>
      <div className="md:flex justify-between items-center">
        <div className="mt-10 md:flex md:flex-col">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-8xl md:text-start md:max-w-[60%] ">
            REVEAL YOUR EDGINESS
          </h1>
          <button
            type="button"
            className="text-white py-3 rounded text-lg font-semibold my-5 bg-blackText hover:bg-primary-700 hover:shadow-lg hover:shadow-blackText/40 w-[100%] md:max-w-[40%]"
          >
            <h1>SHOP NOW</h1>
          </button>
        </div>
        <div className="md:flex md:w-[100%]">
          <img src={heroImg} alt="hero_image" />
        </div>
      </div>
      <section className="md:flex justify-between mt-10">
        {/* Hover card */}
        <div
          class="relative min-w-[50%] overflow-hidden bg-cover bg-no-repeat mb-5 md:mr-2 cursor-pointer"
          onMouseLeave={() => setHover1(false)}
          onMouseEnter={() => setHover1(true)}
        >
          <img src={shirt} class="min-w-full min-h-full " alt="shirt" />
          {hover1 && (
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blackText text-white transition duration-300 ease-in-out hover:opacity-70 flex items-center justify-center">
              <h1 className="bg-blackText/70 text-white font-semibold text-xl">
                Get 40% OFF on your first order
              </h1>
            </div>
          )}
        </div>
        <div
          class="relative min-w-[50%]  overflow-hidden bg-cover bg-no-repeat mb-5 md:ml-2 cursor-pointer"
          onMouseLeave={() => setHover2(false)}
          onMouseEnter={() => setHover2(true)}
        >
          <img src={shoes} class="min-w-full min-h-full " alt="shirt" />
          {hover2 && (
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blackText text-white transition duration-300 ease-in-out hover:opacity-70 flex items-center justify-center">
              <h1 className="bg-blackText/70 text-white font-semibold text-xl">
                Latest Fashion
              </h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;
