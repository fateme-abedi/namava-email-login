import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Input from "../Input/index.js";
import Toast from "../Toast/index.js";
import LoginButton from "./../LoginButton/index.js";
import Link from "./../Link/index.js";

export default function Form({
  inputsData,
  onInputChange,
  onSubmit,
  toastMessage,
  onKeyDown,
}) {
  const linksData = [
    {
      id: 1,
      href: "https://www.namava.ir/auth/recover-email",
      children: "رمز عبور خودا را فراموش کرده ام",
    },
    {
      id: 2,
      href: "https://www.namava.ir/auth/login-phone",
      children: "ورود از طریق شماره تلفن همراه",
    },
  ];

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     console.log("email: " + inputsData.email);
  //     onSubmit(e);
  //   }
  // };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h1>ورود از طریق ایمیل</h1>
      <p>لطفا ایمیل و رمز عبور خود را وارد کنید</p>
      <div className={styles.inputs}>
        <Input
          type="text"
          value={inputsData.email}
          onChange={onInputChange}
          placeholder="ایمیل"
          name="email"
          label="ایمیل"
        />
        <Input
          type="password"
          value={inputsData.password}
          onChange={onInputChange}
          placeholder="رمز عبور"
          name="password"
          label="رمز عبور"
          isPassword
        />
      </div>
      <LoginButton disabled={!inputsData.email || !inputsData.password} />

      <div className={styles.toast_container}>
        {toastMessage && <Toast message={toastMessage} />}
      </div>
      
      <div className={styles.links}>
        {linksData.map((link) => (
          <Link key={link.id} href={link.href} children={link.children} />
        ))}
      </div>
    </form>
  );
}
