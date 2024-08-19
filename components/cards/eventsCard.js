"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/common.module.css';
import Image from 'next/image';

const EventsCard = ({ image, heading, paragraph, buttonText, url, availability_time, date, month, location }) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCardClick = () => {
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
    <div className={styles.event_card}>
      <div className={styles.img_cont}>
        <Image src={image} alt='icon' width={350} height={250} className={styles.image} />
      </div>
      <div className={styles.available_time}>{availability_time}</div>
      <div className={styles.card_wrapper}>
        <div className={styles.card_data}>
          <h3>{heading}</h3>
          <p>{isExpanded ? paragraph : truncateText(paragraph, 30)}</p>
          <div className={styles.content}>
            <div>
              <p>{location}</p>
            </div>
            <button className='secondarybtn' onClick={handleButtonClick}>
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
