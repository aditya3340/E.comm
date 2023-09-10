import React from "react";
import { category } from "../data";

const Categories = () => {
    const categoriesCard = category.map((item) => {
        return (
          <div
            key={item.id}
            className="flex items-center bg-primary1 border rounded-md hover:bg-blackText hover:text-white  my-2 px-5 "
          >
            <div className="flex flex-col min-w-[20%] ">
              <img src={item.image} className="max-h-[150px]  max-w-[100%] py-10" alt="category_img" />
            </div>
            <div className="flex flex-col  text-start mx-5  ">
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <p className="text-md font-medium">{item.items}+ Items Available</p>
            </div>
          </div>
        );
      });

  return (
    <>
      <h1 className="text-start text-4xl my-10 font-semibold">
        Popular Categories
      </h1>
      <section className=" grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-4 ">
        {categoriesCard}
      </section>
    </>
  );
};

export default Categories;
