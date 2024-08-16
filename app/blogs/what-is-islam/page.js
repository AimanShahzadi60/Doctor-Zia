import React from "react";
import Image from "next/image";
import styles from "@/styles/page.module.css";

const Islam = () => {
  return (
    <div className={styles.cer_main_cont}>
      <div className={styles.certificate_cont}>
        <h2>" What is Islam? "</h2>
      </div>

      <div className={styles.blog_container}>
        <p>
          Islam is a monotheistic Abrahamic faith that originated in the 7th
          century CE in the Arabian Peninsula. It is one of the world's major
          religions, with over a billion followers globally. Here are some key
          aspects of Islam:
        </p>
        <h3>Belief in One God</h3>
        <p>
          Central to Islam is the belief in one, all-powerful God, known as
          Allah in Arabic. Allah is believed to be the same God worshiped by
          Jews and Christians.
        </p>

        <h3>The Qur'an</h3>
        <p>
          The Qur'an is the holy book of Islam, believed to be the literal word
          of God as revealed to Muhammad (peace be upon him) through the angel
          Gabriel. It serves as the primary source of guidance for Muslims.
        </p>
        <h3>Five Pillars of Islam</h3>
        <p>
          These are the core practices that define a Muslim's faith and actions:
        </p>

        <Image
          src={"/images/5-pillars-of-islam.webp"}
          alt="Worship Allah"
          width={800}
          height={400}
        />

        <h3>Islamic Law</h3>
        <p>
          Islamic law, or Sharia, is derived from the Qur'an and Hadith (sayings
          and actions of the Prophet Muhammad). It covers various aspects of
          life, including ethics, social justice, and personal conduct.
        </p>
        <h3>Community and Worship</h3>
        <p>
          Muslims gather for communal worship, especially on Fridays, which is
          considered a holy day. The practice of Islam also emphasizes the
          importance of community, compassion, and justice.
        </p>

        <h3>Diverse Traditions</h3>
        <p>
          Islam has various traditions and interpretations, leading to different
          schools of thought and practices within the Muslim community. Major
          branches include Sunni and Shia Islam, each with its own theological
          and jurisprudential nuances.
        </p>
        <h3>Concept of Afterlife</h3>
        <p>
          Muslims believe in an afterlife where individuals will be judged by
          God based on their faith and deeds. Those who have lived righteously
          are rewarded with eternal paradise, while those who have lived
          wickedly face punishment.
        </p>
        <p>
          Overall, Islam is a comprehensive way of life that encompasses
          religious beliefs, rituals, ethical principles, and social
          responsibilities.
        </p>
      </div>
    </div>
  );
};

export default Islam;
