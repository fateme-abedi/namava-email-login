import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import fetchComments from "../../../services/FetchComments.js";
import { v4 as uuidv4 } from "uuid";
import InputResult from "../InputResult/index.jsx";
import CommentsResult from "../CommentsResult/index.jsx";
import { useAuth } from "../../../contexts/AuthContext.js";

export default function CommentsSection() {
  const { isLogin } = useAuth();
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [isloadingMoreComment, setIsLoadingMoreComment] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isCommentPost, setIsCommentPost] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCommentsData = async () => {
    try {
      setIsLoadingMoreComment(true);
      const commentsData = await fetchComments(page);
      setComments((prevComments) => [...prevComments, ...commentsData]);
      setIsLoadingMoreComment(false);
      setIsLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchCommentsData();
  }, [page]);

  const loadMoreComment = () => {
    setPage(page + 1);
  };
  const handlePostComment = (isChecked) => {
    const flag = !!isChecked ? "Spoiled" : "None";
    setIsCommentPost(true);
    const newComment = {
      id: uuidv4(),
      profileCaption: "fateme",
      profileAvatar:
        "/Content/Upload/Images/e9b409a9-88d8-4ee5-a81e-6cddc50782b0.png",
      createDateUTC: new Date()
        .toISOString()
        .replace(/[-:.]/g, "")
        .replace("Z", ""),
      flag: flag,
      body: inputValue,
      commentLikeDislike: {
        likeCount: 0,
        dislikeCount: 0,
      },
    };
    setPage(1);
    setComments((prevComments) => [newComment, ...prevComments]);
    setIsCommentPost(false);
  };

  return isLoading ? (
    <div className={styles.comment}></div>
  ) : (
    <div className={styles.comment}>
      <h1>نظرات کاربران </h1>
      <InputResult
        isLogin={isLogin}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handlePostComment={handlePostComment}
        isCommentPost={isCommentPost}
      />
      <CommentsResult
        isLogin={isLogin}
        comments={comments}
        loadMoreComment={loadMoreComment}
        isloadingMoreComment={isloadingMoreComment}
      />
    </div>
  );
}
