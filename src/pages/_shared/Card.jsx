import React from "react";
import styles from "./Card.module.css";

export default function Card({ children, className }) {
  return (
    <div className={`${className} ${styles.card}`}>
      {children}
    </div>
  );
}
