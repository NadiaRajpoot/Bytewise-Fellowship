import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    setLoading(true);
    const data = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
    );

    const json = await data.json();
    setProduct(json);
    setLoading(false);
  };

  return loading === false ? (
    <div className="w-6/12 border-2 border-gray-300 rounded-lg my-20 p-8 m-auto flex justify-between  items-center">
      <div className="w-6/12">
        <h1 className="font-bold text-lg px-2">{product.name}</h1>
        <h2 className="font-semibold px-2">Brand: {product.brand}</h2>
        <p className="text-sm font-light px-2 py-1">{product.description}</p>
        <div className="flex m-1">
          <h4 className="font-bold p-2 content-center">$ {product.price}</h4>
          <div className="w-[0.10rem] h-10 bg-black my-2"></div>
          <button className="rounded-md border-2 border-pink-400 px-2 m-2 h-10 text-sm relative hover:bg-pink-400 hover:text-white">
            buy now
          </button>
        </div>
      </div>
      <div className=" w-56 h-56 rounded-2xl border-2 border-pink-400 relative flex items-center justify-center">
        <img
          className="w-48 h-48 rounded-2xl z-10 m-auto absolute object-fit"
          src={product.image_link}
          alt="images"
        />
      </div>
    </div>
  ) : (
    <div className="text-4xl font-bold text-center m-auto py-16">
      Loading.....
    </div>
  );
};

export default Item;
