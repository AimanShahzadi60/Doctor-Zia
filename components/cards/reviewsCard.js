"use client";
import React from 'react';
import styles from "@/styles/common.module.css"
import Image from 'next/image';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className={styles.Testimonal_card}>
        <div className={styles.dp_img}>
      <Image src={testimonial.Imageurl1} alt="Testimonial Image 1" width={80} height={80} className={styles.dp}/>
      <span className={styles.comma}>
        <Image src={'/images/inverted-commas.png'} alt={'inverted-commas'} width={20} height={20}/>
      </span>
      </div>
      <p>{testimonial.paragraph}</p>
      <Image src={'/images/travel.png'} alt="Testimonial Image 2" width={130} height={50}/>
      <h4>{testimonial.name}</h4>
      <p>{testimonial.title}</p>
    </div>
  );
};

export default TestimonialCard;
