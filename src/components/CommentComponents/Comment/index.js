import React from "react";
import styles from "./styles.module.css";

export default function Comment(props) {
  const { imgSrc, userName, date, flag, body } = props;

  return (
    <li className={styles.comment}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 40 40"
        class="c-profile-0-1-1425"
      >
        <path
          class="svg-c1"
          d="M1429.6,630.193a19.238,19.238,0,1,0,19.239,19.238A19.26,19.26,0,0,0,1429.6,630.193Zm0,6.383a6.783,6.783,0,1,1-6.782,6.782A6.79,6.79,0,0,1,1429.6,636.576Zm12.7,22.675a15.8,15.8,0,0,1-12.7,6.4,16.2,16.2,0,0,1-12.632-6.37,4.141,4.141,0,0,1-.7-3.937,8.936,8.936,0,0,1,5.3-5.2,2.552,2.552,0,0,1,2.335.239,9.864,9.864,0,0,0,11.379,0,2.564,2.564,0,0,1,2.352-.234,8.936,8.936,0,0,1,5.3,5.241A4.141,4.141,0,0,1,1442.3,659.251Z"
          transform="translate(-1409.595 -629.43)"
        ></path>
        <rect width="40" height="40" fill="none"></rect>
      </svg>
      <div className={styles.info}>
        <div className={styles.userInfo}>
          <span className={styles.userName}>{userName}</span>
          <span>{date}</span>
        </div>
        <div className={styles.spoiler}>
          <img src="./assets/images/Help.svg" />
          <span>این نظر حاوی اسپویلر است و داستان فیلم را لو می دهد</span>
          <img
            src="./assets/images/chevronDown.png"
            className={styles.chevron}
          />
        </div>
        <div className={styles.commentText}>{body}</div>
      </div>
    </li>
  );
}
