import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Input from "./../../components/CommentComponents/Input/index.js";
import CommnetsList from "../../components/CommentComponents/CommentsList/index";
import fetchComments from "../../services/FetchComments";
import PostComment from "../../services/PostComment.js";

export default function CommentPage() {
  const [inputValue, setInputValue] = useState("");
  const [flag, setFlag] = useState(false);
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(2);

  const fetchCommentsData = async () => {
    const commentsData = await fetchComments(page);
    setComments((prevComments) => [...prevComments, ...commentsData]);
  };
  console.log(".." + comments);
  useEffect(() => {
    console.log("gdfgdf");
    fetchCommentsData();
    console.log("gdfgdf2");
  }, [page]);

  const handlePostComment = async () => {
    try {
      const data = await PostComment(
        +140274,
        inputValue.trim(),
        flag,
        "Series"
      );
      if (data.succeeded) {
        setComments([{ ...data }, ...comments]);
      }
    } catch (e) {
      
    }
  };

  return (
    <div className={styles.comment}>
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        flag={flag}
        setFlag={setFlag}
        postComment={handlePostComment}
      />
      <CommnetsList comments={comments} />
    </div>
  );
}
