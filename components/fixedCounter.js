"use client";
import React, { useState, useEffect } from 'react';
import styles from "../styles/page.module.css"

const FixedCounter = ({ fixedNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < fixedNumber) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count, fixedNumber]);

  return (
    <div>
      <h2 className={styles.counting_heading}>{count}+</h2>
    </div>
  );
};

export default FixedCounter;
