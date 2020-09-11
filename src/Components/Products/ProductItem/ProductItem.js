import React from "react";
import style from "./ProductItem.module.scss";
import { useHistory } from "react-router-dom";
import { addItemToCartHandler } from "../../../Actions/productsAction";
export default function ProductItem({ productData }) {
  const { title, price, img, id } = productData;
  const history = useHistory();
  function productDetailHandler() {
    history.push(`/product-detail/${id}`);
  }

  function addProductToCartHandler() {
    addItemToCartHandler(productData);
  }
  return (
    <div className={style["product-item"]}>
      <div className={style["image--container"]}>
        <img src={img} alt="product-image" />
      </div>
      <div className={style["name-container"]}>
        <h3>{title}</h3>
        <button onClick={productDetailHandler}>See Detail</button>
        <button onClick={addProductToCartHandler}>Add Product To Cart</button>
      </div>
    </div>
  );
}
