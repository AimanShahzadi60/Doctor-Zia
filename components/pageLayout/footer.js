"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="Footer-upper-part">
        <div className="logo-part">
        <Link href="/" legacyBehavior>
          <a className="logo"><Image src={'/images/logo1.png'} alt='zia foundation' width={300} height={100}/></a>
        </Link>
          <br/>
          <p className="f-para">
            Zia Foundation shines as a pillar of hope and education, with a
            dedicated mission to empower rural villages.
            <br/>
            <br />
          <a href="tel: 004740849614"> <b>Call:</b> 004740849614 </a>
            <br />
            <a  href="mailto: dr.zia@alrushed.com">  <b>Email:</b> dr.zia@alrushed.com </a>
          </p>
        </div>

        <div className="urls-part">
        <h3>
       Quicks Links
          </h3>

          <ul>
            <li>
              <a href="/blogs/what-is-islam">What Is Islam?</a>
            </li>
            <li>
              <a href="/blogs/who-is-muhammad(P.B.U.H)">Who is Muhammad (P.B.U.H)?</a>
            </li>
            <li>
              <a href="/blogs/what-is-the-purpose-of-life">What is the purpose of life?</a>
            </li>
            <li>
              <a href="/certificate">Authenticity & Certificates</a>
            </li>
          </ul>
        </div>

        <div className="upper-wrapper">
        <div className="urls-part">
          <h3>
          Highlights
          </h3>

          <ul>
            <li>
              <a href="/certificate">certificates</a>
            </li>
            <li>
              <a href="/#blogs">Blogs</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/#about-us">About Us</a>
            </li>
          </ul>
        </div>

       

        <div className="donation-part">
        <h3>
        Feel Free to get in touch 
          </h3>
          <br/>
          <p>
          You can contact us about any query related to ISLAM and our services. We are always here for you.
          </p>
          <br/>
          <a href="/#contact-us">
          <button className="secondarybtn">Stay With Us</button>
          </a>
        </div>
        </div>

      </section>

      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} <a> Zia Welfare Foundation </a> |
          Developed By <a href="https://neurooceans.ai/"> NeuroOceans AI.</a>{" "}
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
