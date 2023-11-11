import React, { useState } from "react";
import styles from "./styles.module.css";
import RegisterModal from "../RegisterModal/index.jsx";
import LottieAnimation from "../LottieAnimation/LottieAnimation.jsx";
import likeActive from "../../../constant/likeActive.json";
import dislikeActive from "../../../constant/dislikeActive.json";
import { useAuth } from "../../../contexts/AuthContext.js";

export default function LikeDislike(props) {
  const { commentLikeDislike } = props;
  const [likeCount, setlikeCount] = useState(commentLikeDislike.likeCount);
  const [dislikeCount, setDislikeCount] = useState(
    commentLikeDislike.dislikeCount
  );
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { isLogin } = useAuth();

  const handleLike = () => {
    if (isLogin) {
      if (!liked && !disliked) {
        console.log("lk3 :" + liked);
        setlikeCount(likeCount + 1);
        setLiked(true);
      } else if (liked && !disliked) {
        setlikeCount(likeCount - 1);
        setLiked(false);
      } else if (!liked && disliked) {
        setlikeCount(likeCount + 1);
        setDislikeCount(dislikeCount - 1);
        setLiked(true);
        setDisliked(false);
      }
    } else {
      setModalIsOpen(true);
    }
  };

  const handleDislike = () => {
    if (isLogin) {
      if (!disliked && !liked) {
        setDislikeCount(dislikeCount + 1);
        setDisliked(true);
      } else if (disliked && !liked) {
        setDislikeCount(dislikeCount - 1);
        setDisliked(false);
      } else if (!disliked && liked) {
        setDislikeCount(dislikeCount + 1);
        setlikeCount(likeCount - 1);
        setDisliked(true);
        setLiked(false);
      }
    } else {
      setModalIsOpen(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div onClick={handleLike}>
          <LottieAnimation
            src={likeActive}
            background="none"
            check={liked}
            width="30px"
            height="30px"
          />
          <span>{likeCount}</span>
        </div>
        <div onClick={handleDislike}>
          <LottieAnimation
            src={dislikeActive}
            background="none"
            check={disliked}
            width="30px"
            height="30px"
          />
          <span>{dislikeCount}</span>
        </div>
      </div>
      {modalIsOpen && <RegisterModal setModalIsOpen={setModalIsOpen} />}
    </>
  );
}
