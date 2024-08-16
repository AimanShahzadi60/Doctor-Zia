import React from "react";
import Image from "next/image";
import HeadingSection from "./headingSection";
import styles from '../../styles/common.module.css'

const AboutUsDescription = () => {
  return (
    <div>
      <div>
        <HeadingSection
        heading={'About Us'}
        title={'Empowerment Through Education:'}
        title2={"Zia Foundation's Commitment"}
        paragraph={"Dr. Muhammad Arshad Zia, a distinguished scholar with a PhD in Islamic Thought and Civilization, has dedicated his life to advancing Islamic education and fostering understanding of Islamic principles and cultural heritage."}
        />
        <div className={styles.points}>
        <Image src={'/images/check.png'} alt=" " width={30} height={30}/>
          <h5>Empowerment Focus</h5>
        </div>
        <div className={styles.points}>
        <Image src={'/images/check.png'} alt=" " width={30} height={30}/>
          <h5>Rural Commitment</h5>
        </div>
        <div className={styles.points}>
        <Image src={'/images/check.png'} alt=" " width={30} height={30}/>
          <h5>Future Leaders</h5>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDescription;
