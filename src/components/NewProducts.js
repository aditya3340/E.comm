import React from "react";
import Card from "./Card";

const NewProducts = ({ data }) => {
  const newProducts = data.map((item, id) => {
    if (id < 4) {
      return <Card {...item} key={id} />;
    }
    return false;
  });

  return (
    <div>
      <h1 className="text-start text-4xl my-3 font-semibold">New Arrivals</h1>
      <div className="card-container">{newProducts}</div>
    </div>
  );
};

export default NewProducts;
