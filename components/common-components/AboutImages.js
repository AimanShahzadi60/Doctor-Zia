// components/ImageSection.js
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/common.module.css';

const ImageSection = ({ image1, image2 }) => {
  return (
    <div className={styles['image-section']}>
      {image1 && <img src={image1.src} alt={"Image1"} className={styles.image1} width={460} height={440}/>}
      {image2 && <img src={image2.src} alt={"Image2"} className={styles.image2} width={200} height={200}/>}
      {/* {image3 && <img src={image3.src} alt={" "} className={styles.image3} />} */}
    </div>
  );
};

export default ImageSection;
