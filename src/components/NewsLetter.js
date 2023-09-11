import React from "react";
import girl from "../assets/girl_with_glasses.png";

const NewsLetter = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center my-10 ">
      <div className="flex flex-col  text-start md:max-w-[40%] md:m-auto ">
        <h1 className="text-4xl py-5 ">Get 40% OFF on your first Order</h1>
        <p className="font-semibold  leading-relaxed py-5">
          Never miss a sale and get fresh editor’s picks in your inbox when you
          join our mailing list
        </p>
        <div className=" pb-5">
          <input
            type="text"
            placeholder="Email Address"
            className="w-[70%] md:w-[50%] px-5 py-2 border rounded-l-lg focus:outline-none focus:border-grayText"
          />
          <button
            type="submit"
            className="bg-blackText border border-blackText text-white px-5 py-2 rounded-r-lg"
          >
            SUBMIT
          </button>
        </div>
      </div>
      <div className="max-w-[100%] m-auto">
        <img src={girl} alt="girl_with_glasses" />
      </div>
    </div>
  );
};

export default NewsLetter;
