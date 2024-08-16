import React from "react";
import Image from "next/image";
import styles from "@/styles/page.module.css";

const Islam = () => {
  return (
    <div className={styles.cer_main_cont}>
      <div className={styles.certificate_cont}>
        <h2>" What Is The Purpose Of Life? "</h2>
      </div>

      <div className={styles.blog_container}>
        <p>
          In Islam, the purpose of life is to worship Allah (God) and live
          according to His guidance. This concept is rooted in several key
          teachings of the Qur'an and Hadith (sayings of the Prophet Muhammad).
          Here are some central aspects of this purpose:
        </p>
        <h3>Worship of Allah</h3>
        <p>
          The primary purpose of life is to worship Allah alone, as mentioned in
          the Qur'an:
          <br />
          <b>
            {" "}
            "And I did not create the jinn and mankind except to worship Me"
            (Qur'an 51:56).{" "}
          </b>
          <br />
          This worship is not limited to rituals but encompasses living a life
          that aligns with Allah's commands and principles.
        </p>

       <Image src={'/images/worship-Allah.png'} alt="Worship Allah" width={600} height={400}/>

        <h3>Following Divine Guidance</h3>
        <p>
          Muslims are encouraged to live their lives according to the teachings
          of the Qur'an and the Sunnah (traditions of the Prophet). This
          involves practicing moral and ethical behavior, fulfilling religious
          obligations, and striving to do good deeds.
        </p>
        <h3>Testing and Trial</h3>
        <p>
          Life is seen as a test, where individuals are given opportunities to
          prove their faith and character. The Qur'an states:
          <br />
          <b>
            {" "}
            "Do not think that those who rejoice for what they have done, and
            love to be praised for what they did not do, think not they are in
            safety from the punishment of Allah; for them is a painful
            punishment" (Qur'an 3:188).{" "}
          </b>
          <br />
          The trials and challenges in life are meant to test one’s patience,
          resilience, and adherence to faith.
        </p>
        <h3>Personal Growth and Development</h3>
        <p>
          Islam emphasizes personal development and self-improvement. Muslims
          are encouraged to seek knowledge, develop their character, and
          contribute positively to society.
        </p>
        <h3>Service to Others</h3>
        <p>
          Helping others and engaging in acts of charity are highly valued. The
          Prophet Muhammad said,
          <br />
          <b>
            {" "}
            “The best of people are those that bring most benefit to the rest of
            mankind.”
          </b>
        </p>

        <Image src={'/images/serving-others.jpg'} alt="Worship Allah" width={800} height={450}/>

        <h3>Preparation for the Afterlife</h3>
        <p>
          {" "}
          Life in this world is seen as a preparation for the hereafter. Muslims
          believe in an afterlife where individuals will be rewarded or punished
          based on their actions and faith. The Qur'an says,
          <br />
          <b>
            {" "}
            "Every soul will taste death. And you will only be given your reward
            in full on the Day of Resurrection" (Qur'an 3:185).
          </b>
        </p>
        <p>
          Overall, Islam teaches that living a life of worship, adhering to
          divine guidance, undergoing trials with faith, and serving others are
          central to fulfilling the purpose of life.
        </p>
      </div>
    </div>
  );
};

export default Islam;
