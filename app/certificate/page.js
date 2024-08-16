import React from 'react'
import Image from 'next/image'
import styles from "@/styles/page.module.css"

const Certificate = () => {
  return (
    <div className={styles.cer_main_cont}>
        <div className={styles.certificate_cont}>
            <h2>" Authenticity & Certificate "</h2>
        </div>

        <div>
          <Image src={'/images/certificate.jpg'} alt='Zia Certificate' width={800} height={900}/>
        </div>
    </div>
  )
}

export default Certificate