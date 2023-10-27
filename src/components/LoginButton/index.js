import React from "react";
import styles from "./styles.module.css";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

export default function LoginButton(props) {
  const { disabled, isLoading } = props;
  return (
    <button disabled={disabled} className={styles.button}>
      {isLoading ? <LoadingAnimation /> : "ورود"}
    </button>
  );
}
