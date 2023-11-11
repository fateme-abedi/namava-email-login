import React, { useState } from "react";
import NoLogin from "../NoLogin/index.jsx";
import PostInput from "../PostInput/index.jsx";
import { useAuth } from "../../../contexts/AuthContext.js";

export default function InputResult(props) {
  const {
    inputValue,
    setInputValue,
    handlePostComment,
    isCommentPost
  } = props;

  const { isLogin } = useAuth();

  return isLogin ? (
    <PostInput
      inputValue={inputValue}
      setInputValue={setInputValue}
      isCommentPost={isCommentPost}
      handlePostComment={handlePostComment}
    />
  ) : (
    <NoLogin />
  );
}
