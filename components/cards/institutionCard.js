// Card.js
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/common.module.css';
import Image from 'next/image';

const InstituteCard = ({image, heading, title, paragraph, buttonText, url }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(url);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className={styles.card}>
      <div className={styles.img_cont}>
        <Image src={image} alt='' width={350} height={400} className={styles.image} />
        </div>
    <div className={styles.card_wrapper}> 
    <div className={styles.card_data}>
    <div className={styles.icon_cont}>
        <Image src={'/images/open-book.png'} alt='' width={50} height={50}/>
        </div>
      <h3>{heading}</h3>
      <div className={styles.content}>
      <span>{title}</span>
      <p>{truncateText(paragraph, 20)}</p>
        <button className='secondarybtn' onClick={handleButtonClick}>{buttonText}</button>
      </div>
      </div>
    </div>
     </div>
  );
};

export default InstituteCard;
