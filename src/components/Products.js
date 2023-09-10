import React, { useState } from "react";
import { data } from "../data";

import { FaSearch } from "react-icons/fa";
import { HiArrowCircleDown } from "react-icons/hi";
import Card from "./Card";

const Products = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((product) => {
    if (search === "") {
      return true; // Include all products when search is empty
    } else if (product.title.toLowerCase().includes(search.toLowerCase())) {
      return true; // Include products whose title matches the search
    }
    return false; // Exclude products that don't match the search
  });

  const mapData = filteredData.map((product,id) => <Card {...product} key={id} />);

  const noResultsMessage = (
    <p>No products found matching your search criteria.</p>
  );

  return (
    <div>
      {/* search bar */}
      <nav className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-row justify-between md:items-center ">
          <div className="relative min-w-[40%] md:min-w-[100%]">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:border-grayText"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="text-blackText" />
            </div>
          </div>

          <button className="bg-primary1 text-grayText border rounded px-5 flex items-center justify-between md:py-2 md:ml-10 md:my-2">
            price
            <HiArrowCircleDown className="text-blackText mx-2" />
          </button>
        </div>
        <button className="hidden md:flex bg-primary1 border py-2 my-2 text-grayText rounded px-5 items-center justify-start ">
          <h1>Sort By</h1>
          <HiArrowCircleDown className="text-blackText mx-2" />
        </button>
      </nav>
      <h1 className="text-start text-4xl my-3 font-semibold">Our Products!</h1>
      {/*The data */}
      {mapData.length > 0 ? <div className="card-container">
        {mapData}
      </div> : noResultsMessage}
    </div>
  );
};

export default Products;
