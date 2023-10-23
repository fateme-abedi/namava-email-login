import React, { useState } from "react";
import styles from "./styles.module.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function Input({
  type,
  value,
  onChange,
  placeholder,
  label,
  name,
  onKeyDown,
  isPassword,
}) {
  const [isTyping, setIsTyping] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [icon, setIcon] = useState(eyeOff);

  const handleInputChange = (e) => {
    onChange(e);
    setIsTyping(e.target.value !== "");
  };

  const togglePasswordVisibility = () => {
    if (showPassword) {
      setIcon(eye);
    } else {
      setIcon(eyeOff);
    }
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.input_wrapper}>
      {isTyping && <label className={styles.label}>{label}</label>}

      <input
        type={isPassword && showPassword ? "text" : type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        name={name}
        onKeyDown={onKeyDown}
      />
      {isPassword && value ? (
        <div className={styles.eye} onClick={togglePasswordVisibility}>
          <span>
            <Icon icon={icon} size={15} />
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}