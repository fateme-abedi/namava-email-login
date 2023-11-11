import React from "react";
import styles from "./styles.module.css";
import Smile from "../../Svg/Smile.jsx";

export default function NoComment() {
  return (
    <div className={styles.noComment}>
      <div className={styles.smileSvg}>
        <Smile/>
      </div>
      <h1>هنوز نظری ثبت نشده .</h1>
      <h1>اولین نفری باشید که نظر خود را ثبت می کند.</h1>
    </div>
  );
}
