import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import NotLogin from "../../Svg/NotLogin.jsx";

export default function NoLogin() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalSvg}>
        <div>
          <NotLogin/>
        </div>
        <h1 className={styles.text}>برای ثبت نظر ابتدا وارد شوید .</h1>
      </div>
      <div className={styles.modalActions}>
        <button className={styles.register}>ثبت نام</button>
        <button className={styles.login} onClick={handleLogin}>
          ورود
        </button>
      </div>
    </div>
  );
}
