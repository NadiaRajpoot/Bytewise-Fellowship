import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Home = () => {
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl"
    );
    const json = await data.json();
    setData(json);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1 className="font-extrabold text-gray-800 text-center m-4 p-10 text-5xl">
          Products
        </h1>
        <div className="grid grid-cols-4 place-items-center w-9/12  gap-8 m-auto">
          {Data.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
