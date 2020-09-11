import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Index() {
  const [product, setProduct] = useState();
  let { id } = useParams();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    const product = products.find((product) => product.id === id);
    console.log(product);
    setProduct(product);
  }, []);

  if (!product) {
    return <h1>loading</h1>;
  }
  const { img, title, price } = product;

  return (
    <div>
      <img src={img} alt="product-image" />
    </div>
  );
}
