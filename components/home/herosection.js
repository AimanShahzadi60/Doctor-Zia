"use client";
import React from "react";
import Slider from "react-slick";
import styles from "@/styles/heroSection.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const HeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      heading: "Faithful Family Support",
      title: "Empowering Families Through Islamic Guidance and Support for Stronger, Faith-Based Relationships",
      text: "Providing resources to nurture strong Islamic family values.",
      imgSrc: "/images/11.jpg",
    },
    {heading: "Lifelong Learning",
      title: "Nurturing Islamic Education Across All Ages for Lifelong Spiritual and Moral Growth",
      text: "Promoting Islamic teachings to inspire continuous spiritual growth.",
      imgSrc: "/images/12.jpg",
    },
    {heading: "Compassionate Care",
      title: "Promoting Community Welfare and Compassionate Assistance Grounded in Core Islamic Values",
      text: "Offering assistance rooted in the principles of Islamic charity.",
      imgSrc: "/images/13.jpg",
    }
    ,
    {heading: "Guided Relationships",
      title: "Strengthening Family Bonds with Counseling and Support Rooted in Islamic Teachings",
      text: "Supporting families with counseling based on Islamic teachings.",
      imgSrc: "/images/14.jpg",
    },
    {heading: "Future Leaders",
      title: "Fostering Youth Development and Leadership Through Islamic Values and Traditions",
      text: "Encouraging youth to embrace Islamic values and leadership roles.",
      imgSrc: "/images/15.jpg",
    },
  ];

  return (
    <div className={styles.hero}>
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.slide_inner}>
            <div className={styles.content}>
            <h4 className={styles.h4}>{slide.heading}</h4>
              <h2 className={styles.title}>" {slide.title} " </h2>
              <p className={styles.subtitle}>{slide.text}</p>
              <div className={styles.growth_cont}>
                <div className={styles.growthing}>
                  <h4>62</h4>
                  <p>Diverse</p>
                </div>

                <div className={styles.growthing}>
                  <h4>12K</h4>
                  <p>Growing</p>
                </div>

                <div className={styles.growthing}>
                  <h4>80%</h4>
                  <p>People Accepting Islam</p>
                </div>
              </div>
            </div>
            <div className={styles.image_cont}>
            <img src={slide.imgSrc} alt={slide.title} className={styles.image} />
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
