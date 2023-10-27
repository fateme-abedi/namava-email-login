import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Toast({ message }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    isVisible && (
      <div className={styles.toast}>
        <img src="./assets/warning.png" alt="Warning" />
        <span>{message}</span>
      </div>
    )
  );
}
