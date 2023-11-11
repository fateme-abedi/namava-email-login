import React, { useState } from "react";
import styles from "./styles.module.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function Input(props) {
  const {
    type,
    value,
    onChange,
    placeholder,
    label,
    name,
    onKeyDown,
    isPassword,
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const icon = showPassword ? eye : eyeOff;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.input_wrapper}>
      {value && <label className={styles.label}>{label}</label>}
      <input
        type={isPassword && showPassword ? "text" : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        onKeyDown={onKeyDown}
      />
      {isPassword && value && (
        <div className={styles.eye} onClick={togglePasswordVisibility}>
          <span>
            <Icon icon={icon} size={15} />
          </span>
        </div>
      )}
    </div>
  );
}
