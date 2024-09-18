import React from 'react'
import HeadingSection from '../common-components/headingSection'
import styles from "@/styles/common.module.css"
import Image from 'next/image'


const WhyChooseUs = () => {
  return (
    <div className={styles.Why_choose_us}>
        <div className={styles.why_wrapper}>
        <div className={styles.institute_heading}>
     <HeadingSection
     heading={'Why Choose Us'}
     title={'The Best Beneficial Side of '}
     title2={'Zia Foundation'}
     />
     </div>
     
     <div className={styles.choosing_cards}>
     <div className={styles.choose1}>
        <div className={styles.choose_icon_1}>
        <img src={'/images/online-learning.png'} alt='Online-Learning' width={50} height={50}/>
        </div>
        <h3>
        Tailored Educational Solutions
        </h3>
        <p>
        Personalized approaches addressing diverse needs, ensuring effective learning outcomes for every individual.
        </p>
     </div>

     <div  className={styles.choose1}>
        <div className={styles.choose_icon_1}>
        <img src={'/images/biometric.png'} alt='Biometric' width={50} height={50}/>
        </div>
        <h3>
        Community-Centric Initiatives
        </h3>
        <p>
        Empowering locals, fostering ownership, and sustainability through collaborative programs tailored to community needs.
        </p>
     </div>

     <div  className={styles.choose1}>
        <div className={styles.choose_icon_1}>
        <img src={'/images/search.png'} alt='Searching' width={50} height={50}/>
        </div>
        <h3>
        Research-Backed Interventions
        </h3>
        <p>
        Continuous study and data-driven strategies ensure impactful solutions and transformative outcomes for beneficiaries.
        </p>
     </div>
     </div>
     </div>
    </div>
  )
}

export default WhyChooseUs