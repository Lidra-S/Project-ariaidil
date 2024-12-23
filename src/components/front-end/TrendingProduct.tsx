"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  catagory: string;
  price: number;
}

const TrendingProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("/api/product")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container  mt-32">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-4xl font-medium">Trending Product</h2>

        <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
          <div className="text-black">New</div>
          <div>Featured</div>
          <div>Top Sellers</div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {product.map((item: IProduct) => (
          <ProductCard
            key={item._id}
            id={item._id}
            img={item.imgSrc}
            catagory={item.catagory}
            title={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingProduct;
