import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import LoginUserByEmail from "../../services/LoginUserByEmail.js";
import Form from "../../components/LoginComponents/Form/index.js";
import Header from "../../components/LoginComponents/Header/index.js";
import { setCookie } from "../../utils/cookieUtils.js";

export default function LoginPage() {
  const [inputsData, setInputsData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 5000);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
    return regex.test(password);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputsData({ ...inputsData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateEmail(inputsData.email)) {
      showToast("فرمت ایمیل صحیح نمی باشد.");
      setIsLoading(false);
      return;
    }
    try {
      const response = await LoginUserByEmail(
        inputsData.email,
        inputsData.password
      );
      if (response.succeeded) {
        setCookie("isLogin", true);
        navigate("/comments");
      } else {
        showToast("نام کاربری یا رمز ورودی صحیح نمی باشد. ");
      }
      setIsLoading(false);
    } catch (error) {
      setToastMessage("هنگام ورود خطایی رخ داده است لطفا دوباره امتحان کنید");
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSubmit, handleKeyDown]);

  return (
    <div className={styles.login}>
      <Header />
      <Form
        inputsData={inputsData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        toastMessage={toastMessage}
        isLoading={isLoading}
      />
    </div>
  );
}
