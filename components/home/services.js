import React from "react";
import HeadingSection from "../common-components/headingSection";
import Image from "next/image";
import styles from "@/styles/services.module.css";
import stylescommon from "@/styles/common.module.css";

const Services = () => {
  return (
    <div className={styles.services_cont}>
      <div className={stylescommon.head_cont}>
        <HeadingSection heading={"What we serve"} title={"Our Services"} />
      </div>
      <div className={styles.service_section}>
        <div className={styles.per_service}>
          <Image
            src={"/images/quran-1.png"}
            alt="Quran teaching"
            width={120}
            height={120}
          />
          <h2>QURAN teaching</h2>
          <p>
            The Prophet said,
            <br />
            <b className={styles.bold}>
              "The best among you (Muslims) are those who learn the Qur'an and
              teach it."{" "}
            </b>
            <br />
            (Sahih al-Bukhari, Book 61, Hadith 545)
            <br></br>
            Learning the Quran is a profoundly valuable practice that every
            Muslim should engage in daily. It offers deep insights into all
            aspects of life, brings them closer to the Creator, and serves as a
            testament to the rewards of their good deeds on the Day of Judgment.
            Moreover, it nurtures a sense of spiritual fulfillment and guidance.
            {/* helping individuals navigate the challenges of life with wisdom and
            grace. */}
          </p>
        </div>

        <div className={styles.per_service}>
          <Image
            src={"/images/mosque.png"}
            alt="Building Mosque"
            width={120}
            height={120}
          />
          <h2>mosque renovation</h2>
          <p>
            The Prophet said,
            <br />
            <b className={styles.bold}>
              "Whoever builds a mosque for Allah, Allah will build for him a
              house like it in Paradise."{" "}
            </b>
            <br />
            (Sahih al-Bukhari, Book 8, Hadith 441 and Sahih Muslim, Book 4,
            Hadith 1083)
            <br></br>
            Constructing a mosque is a remarkable act of continuous charity
            (Sadaqah Jariyah). The rewards for this noble deed are perpetual,
            and as long as the mosque serves the community, you will continue to
            earn blessings from Allah (SWT), extending even into the Hereafter.
          </p>
        </div>

        <div className={styles.per_service}>
          <Image
            src={"/images/gravestone.png"}
            alt="FUNERAL Service"
            width={120}
            height={120}
          />
          <h2>FUNERAL Service</h2>
          <p>
            The Prophet said,
            <br />
            <b className={styles.bold}>
              "Whoever attends the funeral until the prayer is offered will have
              a reward equal to one Qirat, and whoever attends until (the body)
              is buried will have a reward equal to two Qirats." It was asked,
              "What are two Qirats?" He replied, "Like two huge mountains."{" "}
            </b>
            <br />
            (Sahih al-Bukhari, Book 23, Hadith 86)
            <br></br>
            Funeral services in Islam are vital, providing spiritual rewards for
            participants. Attending the prayer and burial honors the deceased
            while offering blessings from Allah (SWT). This act fosters
            community ties and fulfills an important religious duty.
          </p>
        </div>

        <div className={styles.per_service}>
          <Image
            src={"/images/poverty.png"}
            alt="help poor"
            width={120}
            height={120}
          />
          <h2>help poor</h2>
          <p>
            The Prophet said,
            <br />
            <b className={styles.bold}>
              "Charity does not decrease wealth. No one forgives another except
              that Allah increases his honor, and no one humbles himself for the
              sake of Allah except that Allah elevates his status."{" "}
            </b>
            <br />
            (Sahih Muslim, Book 32, Hadith 6264)
            <br></br>
            Helping the poor is a noble act in Islam, reflecting compassion and
            generosity. It not only provides essential support to those in need
            but also earns immense rewards from Allah (SWT). Engaging in acts of
            charity fosters a sense of community and strengthens the bonds of
            brotherhood among Muslims.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
