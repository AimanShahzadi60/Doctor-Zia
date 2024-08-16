"use client";

import React from 'react';
import Slider from 'react-slick';
import styles from "@/styles/slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const QuranAyat = () => {
  const slides = [
    {
      title: "(At-Tawbah, 9:51)",
      paragraph: "'Say, “Nothing will ever befall us except what Allah has destined for us. He is our Protector.” So in Allah let the believers put their trust.'  "
    },
    {
      title: "(Al-Ankabut, 29:69)",
      paragraph: "'And those who strive for Us – We will surely guide them to Our ways. And indeed, Allah is with the doers of good.'"
    },
    {
      title: "(Quran 2:286)",
      paragraph: "'Allah does not burden a soul beyond that it can bear' "
    },
    {
      title: "(Quran 8:33)",
      paragraph: "'And Allah would not punish them while they seek forgiveness' "
    },
    {
      title: "(Quran 64:3)",
      paragraph: "'He created the heavens and earth in truth and formed you and perfected your forms; and to Him is the [final] destination' "
    },
    {
      title: "(Quran 7:156)",
      paragraph: "'My mercy encompasses all things' "
    }
  ];

  // React Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slider_heading}>
      <p>ISLAMIC QUOTES FROM QURAN</p>
      <h2>ISLAMIC QUOTES</h2>
      </div>
      <Slider {...settings} className={styles.ayatSwiper}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.ayat_slide}>
            <img src={"images/quran.png"} alt='Quran'/>
            <h2 className={styles.title}>Al-QURAN</h2>   
            <p className={styles.paragraph}>{slide.paragraph}</p>
            <h3> {slide.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default QuranAyat;
