import React from "react";
import styles from "./styles.module.css";
import Link from "../Link/index.js";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src="./assets/namava.png" alt="namava-logo" />
      <button>
        <Link
          href="https://www.namava.ir/auth/register-phone"
          children="ثبت نام"
        />
      </button>
    </div>
  );
}
