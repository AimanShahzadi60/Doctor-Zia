'use clients';
import React from 'react'
import data from "@/public/data/institutionsCard.json"
import InstituteCard from '@/components/cards/institutionCard'
import styles from "@/styles/institute.module.css"

const InstitutionsData = () => {
  return (
    <div className={styles.institute_cont}>
   <div className={styles.cont_wrapper}>
      {data.map((Data, index) => (
        <InstituteCard
          key={index}
          heading={Data.heading}
          title={Data.title}
          paragraph={Data.paragraph}
          buttonText={Data.buttonText}
          url={Data.url}
          image={Data.Imageurl}
        />
      ))}
    </div>



    </div>
  )
}

export default InstitutionsData