import React from "react";
import styles from "./styles.module.css";
import Comment from "../Comment/index.jsx";
import formatDateToPersian from "../../../utils/formatDateToPersian.js";
import LottieAnimation from "../LottieAnimation/LottieAnimation.jsx";
import moreLottie from "../../../constant/moreLottie.json";

export default function CommnetsList(props) {
  const { comments, loadMoreComment, isloadingMoreComment } = props;

  return (
    <div className={styles.comments}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          imgSrc={comment.profileAvatar}
          userName={comment.profileCaption}
          date={formatDateToPersian(comment.createDateUTC)}
          flag={comment.flag}
          body={comment.body}
          commentLikeDislike={comment.commentLikeDislike}
        />
      ))}
      <button onClick={loadMoreComment}>
        {isloadingMoreComment ? (
          <LottieAnimation
            src={moreLottie}
            background="none"
            width="14px"
            height="14px"
            check={isloadingMoreComment}
          />
        ) : (
          "بیشتر"
        )}
      </button>
    </div>
  );
}
