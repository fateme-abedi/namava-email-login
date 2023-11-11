import React from "react";
import styles from "./styles.module.css";
import LottieAnimation from "../LottieAnimation/LottieAnimation.jsx";
import checkboxLottie from "../../../constant/checkboxLottie.json";
export default function InputCheckbox(props) {
  const { check, handleFlagChange } = props;
  return (
    <div  className={styles.checkbox} onClick={handleFlagChange}>
      <LottieAnimation
        src={checkboxLottie}
        background="#222327"
        check={check}
      />
      <span className={styles.name}>
        این نظر حاوی اسپویلر است و داستان فیلم را لو میدهد.
      </span>
    </div>
  );
}
