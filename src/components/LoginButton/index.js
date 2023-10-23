import React from "react";
import styles from "./styles.module.css";

export default function LoginButton({ disabled }) {
  return (
    <button disabled={disabled} className={styles.button}>
      ورود
    </button>
  );
}
