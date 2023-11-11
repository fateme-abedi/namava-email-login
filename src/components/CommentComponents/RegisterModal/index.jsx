import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import NotLogin from "../../Svg/NotLogin.jsx";

export default function RegisterModal({ setModalIsOpen }) {
  const navigate = useNavigate();
  const handleLogin = () => {
    setModalIsOpen(false);
    navigate("/");
  };
  return (
    <div className={styles.modalOverlay} onClick={() => setModalIsOpen(false)}>
      <div className={styles.modal}>
        <div className={styles.modalSvg}>
          <div>
           <NotLogin/>
          </div>
          <h1 className={styles.text}>برای ثبت نظر ابتدا وارد شوید .</h1>
        </div>
        <div className={styles.modalActions}>
          <button
            className={styles.register}
            onClick={() => setModalIsOpen(false)}
          >
            ثبت نام
          </button>
          <button className={styles.login} onClick={handleLogin}>
            ورود
          </button>
        </div>
      </div>
    </div>
  );
}
