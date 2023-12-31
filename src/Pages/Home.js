import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Categories from "../components/Categories";
import NewProducts from "../components/NewProducts";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  // console.log(data);

  return (
    <>
      <Nav />
      <Hero />
      <Products data={data} />
      <Categories />

      <NewProducts data={data} />
      <NewsLetter />
    </>
  );
};

export default Home;
