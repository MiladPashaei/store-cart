import React from "react";
import { useSelector } from "react-redux";
import style from "./Products.module.scss";
import ProductItem from "../../Components/Products/ProductItem/ProductItem";
export default function Products() {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h1>Products</h1>
      <div className={style["product-container"]}>
        {products.length > 0 &&
          products.map((product) => {
            return <ProductItem key={product.id} productData={product} />;
          })}
      </div>
    </div>
  );
}
