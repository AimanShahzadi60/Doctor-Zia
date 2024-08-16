'use client';
import React, { useState } from 'react';
import HeadingSection from '../common-components/headingSection';
import styles from '../../styles/common.module.css';
import data from "@/public/data/eventsCardData.json";
import EventsCard from '../cards/eventsCard';

const EventsProjects = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const visibleCards = showMore ? data : data.slice(0, 3);

  return (
    <div className={styles.main_container}>
      <div className={styles.head_cont}>
        <HeadingSection
          heading={'EXPLORE'}
          title={'Family Services'}
          title2={''}
          paragraph={''}
        />
      </div>
      <div className={styles.event_card_cont}>
        {visibleCards.map((Data, index) => (
          <EventsCard
            key={index}
            heading={Data.heading}
            paragraph={Data.paragraph}
            buttonText={Data.buttonText}
            url={Data.url}
            image={Data.Imageurl}
            availability_time={Data.availability_time}
            date={Data.date}
            month={Data.month}
            location={Data.location}
          />
        ))}
      </div>
      {data.length > 3 && (
        <div className={styles.show_more_btn_cont}>
          <button className='secondarybtn' onClick={handleShowMore}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default EventsProjects;
