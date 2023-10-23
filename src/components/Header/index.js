import React from "react";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src="./assets/namava.png" alt="namava-logo" />
      <button>ثبت نام</button>
    </div>
  );
}
