"use client";

import React from 'react';
import Slider from 'react-slick';
import testimonials from "@/public/data/reviews.json";
import TestimonialCard from '../cards/reviewsCard';
import styles from "@/styles/slider.module.css"; // Ensure you import your CSS4
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  // React Slick settings
  const settings = {
    dots: true, // Show dots for pagination
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    // autoplay: true, // Enable autoplay
    // autoplaySpeed: 2500, // Autoplay speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    arrows: false, // Hide next and previous buttons
  };

  return (
    <Slider {...settings} className={styles.mySwiper}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={styles.slide}>
          <TestimonialCard testimonial={testimonial} />
        </div>
      ))}
    </Slider>
  );
};

export default Reviews;
