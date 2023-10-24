import React, { useState, useEffect } from "react";
import LoginUserByEmail from "../../services/LoginUserByEmail";
import LoadingAnimation from "./../LoadingAnimation/LoadingAnimation.js";
import Form from "../Form/index.js";

export default function Login() {
  const [inputsData, setInputsData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

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
        window.open("https://www.namava.ir/profile-list");
      } else {
        setToastMessage("نام کاربری یا رمز ورودی صحیح نمی باشد. ");
      }

      setIsLoading(false);
    } catch (error) {
      setToastMessage(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        console.log("email: " + inputsData.email);
        handleSubmit(e);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSubmit]);

  return isLoading ? (
    <LoadingAnimation />
  ) : (
    <Form
      inputsData={inputsData}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      toastMessage={toastMessage}
    />
  );
}
