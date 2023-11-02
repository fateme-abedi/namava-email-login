import React, { useState } from "react";
import styles from "./styles.module.css";

export default function Input(props) {
  const { inputValue, setInputValue, flag, setFlag, postComment } = props;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleFlagChange = () => {
    setFlag(!flag);
  };
  const handlePostCommentChange = () => {
    postComment();
    setInputValue("");
  };

  return (
    <div>
      <div className={styles.input}>
        <img src="./assets/images/ellipse.svg" />
        <input
          value={inputValue}
          placeholder="نظرتان درباره این فیلم چیست؟"
          onChange={handleInputChange}
        />
        {inputValue ? (
          <img
            src="./assets/images/sendd.svg"
            onClick={handlePostCommentChange}
          />
        ) : (
          <img src="./assets/images/send.svg" />
        )}
      </div>
      <label className={styles.container}>
        <input type="checkbox" checked={flag} onChange={handleFlagChange} />
        <span className={styles.checkmark}></span>
        <span className={styles.name}>
          این نظر حاوی اسپویلر است و داستان فیلم را لو میدهد.
        </span>
      </label>
    </div>
  );
}
