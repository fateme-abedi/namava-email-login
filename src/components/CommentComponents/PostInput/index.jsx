import React, { useState } from "react";
import styles from "./styles.module.css";
import sentLottie from "../../../constant/sentLottie.json";
import PostComment from "../../Svg/PostComment.jsx";
import LottieAnimation from "../LottieAnimation/LottieAnimation.jsx";
import InputCheckbox from "../InputCheckbox/index.jsx";
import UserAvatar from "../../Svg/UserAvatar.jsx";
import Warning from "../../Svg/Warning.jsx";

export default function PostInput(props) {
  const {
    inputValue,
    setInputValue,
    isCommentPost,
    handlePostComment,
  } = props;
  const [check, setCheck] = useState(false);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleFlagChange = () => {
    setCheck((prevCheck) => !prevCheck);
  };
  const handlePostComments = () => {
    handlePostComment(check);
    setInputValue("");
    setCheck(false);
  };

  return (
    <div>
      <div className={styles.input}>
        <UserAvatar />
        <input
          value={inputValue}
          placeholder="نظرتان درباره این فیلم چیست؟"
          onChange={handleInputChange}
        />
        {isCommentPost ? (
          <LottieAnimation
            src={sentLottie}
            background="#99C14D"
            check={isCommentPost}
          />
        ) : (
          <PostComment
            inputValue={inputValue}
            handlePostComment={handlePostComments}
          />
        )}
      </div>
      {/* {commentError && (
        <div className={styles.error}>
          <Warning />
          <h3>ثبت نظر ناموفق بود.</h3>
        </div>
      )} */}
      <InputCheckbox check={check} handleFlagChange={handleFlagChange} />
    </div>
  );
}
