import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ title, price, image, rating, id, category }) => {
  return (
    <div
      key={id}
      className=" flex flex-col w-full max-w-sm  border border-gray-200 rounded-lg shadow bg-primary1 max-w-screen-md mx-auto cursor-pointer"
    >
      <img
        className="max-h-[250px] m-auto max-w-[60%] py-10"
        src={image}
        alt="product_image"
      />

      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-black text-start ">
          {title}
        </h5>
        <div className="flex items-center justify-between">
          <h5 className="text-xs py-1 font-semibold tracking-tight text-black text-start ">
            {category}
          </h5>
          <div className="flex items-center mt-2.5 mb-5">
            <FaStar className="text-amber-200 mr-2" />
            <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
              {rating.rate} / 5
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-blackText">${price}</span>

          <button className="text-blackText font-semibold bg-primary1 rounded-full text-sm px-5 py-2.5 text-center hover:bg-blackText border hover:text-white ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
