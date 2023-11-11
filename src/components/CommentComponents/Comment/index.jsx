import React, { useState } from "react";
import styles from "./styles.module.css";
import LikeDislike from "../LikeDislike/index.jsx";

export default function Comment(props) {
  const { imgSrc, userName, date, flag, body, commentLikeDislike } = props;
  const [showCommnet, setShowCommnet] = useState(flag);
  const handleChevronDown = () => {
    setShowCommnet("None");
  };

  return (
    <li className={styles.comment}>
      <div className={styles.profile}>
        <img src={`https://www.namava.ir${imgSrc}`} />
      </div>
      <div className={styles.info}>
        <div className={styles.userInfo}>
          <span className={styles.userName}>{userName} </span>
          <span> - {date}</span>
        </div>

        {showCommnet === "Spoiled" && (
          <div className={styles.spoiler}>
            <img src="./assets/images/Help.svg" />
            <span>این نظر حاوی اسپویلر است و داستان فیلم را لو می دهد</span>
            <img
              src="./assets/images/chevronDown.png"
              className={styles.chevron}
              onClick={handleChevronDown}
            />
          </div>
        )}
        {showCommnet === "None" && (
          <>
            <div className={styles.commentText}>{body}</div>
            <LikeDislike commentLikeDislike={commentLikeDislike} />
          </>
        )}
      </div>
    </li>
  );
}
