import React, { useState } from "react";
import styles from "./styles.module.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header} dir="rtl">
      <nav className={styles.nav}>
        <div onClick={toggleMenu} className={styles.hamburgerMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              d="M17.699 15.1221H0.980012C0.438497 15.1221 -0.000488281 15.5611 -0.000488281 16.1026C-0.000488281 16.6441 0.438497 17.0831 0.980012 17.0831H17.699C18.2405 17.0831 18.6795 16.6441 18.6795 16.1026C18.6795 15.5611 18.2405 15.1221 17.699 15.1221Z"
              fill="white"
            />
            <path
              d="M17.699 7.56104H0.980012C0.438497 7.56104 -0.000488281 8.00002 -0.000488281 8.54153C-0.000488281 9.08305 0.438497 9.52203 0.980012 9.52203H17.699C18.2405 9.52203 18.6795 9.08305 18.6795 8.54153C18.6795 8.00002 18.2405 7.56104 17.699 7.56104Z"
              fill="white"
            />
            <path
              d="M0.980012 1.961H17.699C18.2405 1.961 18.6795 1.52202 18.6795 0.9805C18.6795 0.438985 18.2405 0 17.699 0H0.980012C0.438497 0 -0.000488281 0.438985 -0.000488281 0.9805C-0.000488281 1.52202 0.438497 1.961 0.980012 1.961Z"
              fill="white"
            />
          </svg>
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
      <div class={styles.buttons}>
        <img src="./assets/images/search.svg" />
        <img src="./assets/images/shuffle.svg" />
        <button className={styles.logOut}>خروج </button>
      </div>
    </header>
  );
}
