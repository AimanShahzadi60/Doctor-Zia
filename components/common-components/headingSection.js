import React from 'react';
import Image from 'next/image';
import styles from "./../../styles/common.module.css"

const HeadingSection = ({ heading, title, paragraph, title2 }) => {
  return (
    <div className={styles.heading_section}>
      <h4>{heading}</h4>
      <h2>{title}<br/><b className={styles.red_color_bold}>{title2}</b></h2>
      <Image src={'/images/underline.png'} width={200} height={40} alt=' '/>
      <p>{paragraph}</p> 
    </div>
  );
};

export default HeadingSection;