import React from "react";
import styles from "./styles.module.css";
import Comment from "../Comment";
import formatDateToPersian from "../../../constant/formatDateToPersian";

export default function CommnetsList({ comments }) {
  return (
    <div className={styles.comments}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          imgSrc={comment.profileAvatar}
          userName={comment.profileCaption}
          date={formatDateToPersian(String(comment.createDateUTC))}
          body={comment.body}
        />
      ))}
    </div>
  );
}
