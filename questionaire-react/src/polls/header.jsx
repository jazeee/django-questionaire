import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <Link to="/">All Questions</Link>
    </div>
  )
}
