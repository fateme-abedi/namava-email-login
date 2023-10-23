import React, { useState } from "react";
import styles from "./styles.module.css";

export default function Link({ href, children }) {
  return (
    <div className={styles.link}>
      <a href={href}>{children}</a>
    </div>
  );
}
