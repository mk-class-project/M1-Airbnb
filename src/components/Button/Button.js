import React from 'react';
import styles from "./Button.module.scss";

const Button = ({ title, handleClick, type, btnClass }) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      className={`${styles.btn} ${styles[btnClass]}`}
    >
      {title}
    </button>
  );
}

export default Button;