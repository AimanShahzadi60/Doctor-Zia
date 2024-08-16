import AboutUsDescription from "@/components/common-components/AboutUsDescription";
import styles from "../styles/page.module.css";
import ImageSection from "@/components/common-components/AboutImages";
import EventsProjects from "@/components/home/events&projects";
import HeadingSection from "@/components/common-components/headingSection";
import InstitutionsData from "@/components/home/institutiondata";
import commonStyle from "@/styles/common.module.css";
import WhyChooseUs from "@/components/home/whyChooseUs";
import Reviews from "@/components/home/Reviews";
import HeroSection from "@/components/home/herosection";
import QuranAyat from "@/components/home/quranAyat";
import Image from "next/image";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.home_container}>
        <HeroSection />
      </section>

      <section className={styles.welcome_section}>
        <div className={commonStyle.welcome}>
          <HeadingSection
            heading={"Welcome to the Islamic center"}
            title={"In The Name Of Allah"}
            title2={" The Beneficent The Merciful"}
          />
        </div>
      </section>

      <section className={styles.home_container1} id="about-us">
        <div className={styles.abt_cont1}>
          <ImageSection
            image1={{ src: "/images/about1.jpg" }}
            // image2={{ src: "/images/authenticity.jpg" }}
          />
        </div>
        <div className={styles.abt_cont1}>
          <AboutUsDescription />
        </div>
      </section>

      <section className={styles.purpose_section}>
        <div className={styles.vision}>
          <div className={styles.titles}>
            <div>
            <Image src={"/images/prayer.png"} alt="" width={50} height={50}/>
            </div>
          <h2>Vision</h2>
          </div>
          <p>
            Zia Foundation envisions a world where every individual has the
            chance to live a healthy, dignified, and fulfilling life. We strive
            for a society free from poverty, inequality, and injustice, ensuring
            that all individuals have access to the resources and opportunities
            necessary to achieve their full potential. Our belief in the
            inherent value of each person drives us to treat everyone with
            respect and dignity. We are dedicated to this vision through our
            various programs and initiatives, as well as by collaborating with
            organizations and individuals who share our mission and values.
          </p>
        </div>
        <div className={styles.mission}>
        <div className={styles.titles}>
            <div>
            <Image src={"/images/islamic.png"} alt="" width={50} height={50}/>
            </div>
          <h2>Mission</h2>
          </div>
          <p>
            The mission of Zia Foundation is to deliver essential services and
            support to marginalized communities, concentrating on education,
            healthcare, and social welfare. We are dedicated to empowering
            individuals and families to enhance their quality of life and
            achieve independence. Through our various programs and initiatives,
            we strive to foster a more equitable and just society, ensuring that
            everyone has access to the resources and opportunities necessary for
            their well-being. Our mission is rooted in the values of compassion,
            integrity, and social responsibility, and we are committed to making
            a meaningful difference in the lives of those we serve.
          </p>
        </div>
      </section>

      <section className={styles.service_part} id="services">
        <Services/>
      </section>

      <section className={styles.home_container2}>
        <EventsProjects />
      </section>
     

      <section className={styles.home_container4}>
        <WhyChooseUs />
      </section>

     

      <section className={styles.ayat_Section}>
        <QuranAyat />
      </section>

      <section className={styles.home_container3} id="blogs">
        <div className={commonStyle.institute_heading}>
          <HeadingSection
            title={"Blogs"}
            paragraph={
              "Discover insightful articles and thought-provoking content on Zia Foundation's blog, where we explore Islamic teachings, family values, and community welfare, guiding you towards a deeper understanding of faith and life."
            }
          />
        </div>
        <InstitutionsData />
      </section>

      <section className={styles.home_container5}>
        <div className={styles.heading_part}>
          <HeadingSection
            heading={"TESTIMONIALS"}
            title={"What Our Guests "}
            title2={'Have To Say'}
            paragraph={
              "Here's what our followers and supporters are saying about the impact of Zia Foundation."
            }
          />
        </div>
        <Reviews />
      </section>

      <section className={styles.home_container6} id="contact-us">
        <div className={styles.contact}>
          <div className={styles.contact_info1}>
            <p>Get In Touch:</p>
            <h3>
              <a href="mailto: arshadzia313@gmail.com">
              arshadzia313@gmail.com
              </a>
            </h3>
          </div>
          <span>OR</span>
          <div className={styles.contact_info}>
            <p> Call Us Via:</p>
            <h3>
              <a href="tel: 004740849614">004740849614</a>
            </h3>
          </div>
        </div>
      </section>

     
    </div>
  );
}
