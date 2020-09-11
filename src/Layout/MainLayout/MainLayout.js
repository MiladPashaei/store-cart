import React from "react";
import style from "./MainLayout.module.scss";
export default function MainLayout(props) {
  return (
    <div className={style["layout-container"]}>
      <div className={style["layout-navbar"]}>
        <button onClick={() => console.log("run")}>See Cart</button>
      </div>
      <div className={style["content-container"]}>{props.children}</div>
    </div>
  );
}
