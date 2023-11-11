import React, { useState } from "react";
import styles from "./styles.module.css";
import { deleteCookie } from "../../../utils/cookieUtils.js";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../../Svg/HamburgerMenu.jsx";
import NamavaLogo from "../../Svg/NamavaLogo.jsx";
import { useAuth } from "../../../contexts/AuthContext.js";

export default function CommentHeader() {
  const { isLogin, setIsLogin } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setShowMenu(false);
  };
  const handleLogout = () => {
    deleteCookie("isLogin");
    setIsLogin(false);
  };

  const handleSignIn = () => {
    navigate("/");
  };
  return (
    <header className={styles.header} dir="rtl">
      <nav className={styles.nav}>
        <div onClick={toggleMenu} className={styles.hamburgerMenu}>
          <HamburgerMenu />
        </div>
        <div>
          <NamavaLogo />
        </div>

        <div className={showMenu ? styles.menuActive : styles.menu}>
          <span>
            <a href="#">خانه</a>
          </span>
          <span>
            <a href="#">فیلم ها</a>
          </span>
          <span>
            <a href="#">سریال ها</a>
          </span>
          <span>
            <a href="#">دسته بندی</a>
          </span>
          <span>
            <a href="#">تازه ها</a>
          </span>
          <span>
            <a href="#">کودکان</a>
          </span>
          <span>
            <a href="#">پردیس نماوا</a>
          </span>
          <span>
            <a href="#">نماوا مگ</a>
          </span>
        </div>
      </nav>
      <div className={styles.buttons}>
        <img src="./assets/images/search.svg" />
        <img src="./assets/images/shuffle.svg" />

        <button
          className={styles.logOut}
          onClick={isLogin ? handleLogout : handleSignIn}
        >
          {isLogin ? "خروج" : "ورود"}
        </button>
      </div>
    </header>
  );
}
