import React from 'react';
import "../styles/Footer.css";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  return (
    <>
    <footer>
      <div className="foot-panel1" onClick={scrollToTop}>
        Back to Top
      </div>
      <div className="foot-panel2"> 
      <ul>
        <p>Get to Know Us</p>
        <a href="/" className='nav-link'>Careers</a>
        <a href="/" className='nav-link'>Blog</a>
        <a href="/" className='nav-link'>Podcast</a>
        <a href="/" className='nav-link'>Documentation</a>
        <a href="/" className='nav-link'>Advertise</a>
      </ul>
      <ul>
        <p>Let us Help You</p>
        <a href="/" className='nav-link'>Self-publish with us</a>
        <a href="/" className='nav-link'>Become an Affliate</a>
        <a href="/" className='nav-link'>Advertise your books</a>
      </ul>
      <ul>
        <p>Social</p>
        <a href="https://www.youtube.com" className='nav-link'><FaYoutube/>  <b>Youtube</b></a>
        <a href="https://www.instagram.com" className='nav-link'><FaInstagram/>  <b>Instagram</b></a>
        <a href="https://www.twitter.com" className='nav-link'><FaSquareXTwitter/>  <b>Twitter</b></a>
        <a href="https://www.facebook.com" className='nav-link'><FaFacebook/>  <b>Facebook</b></a>
      </ul>
      <ul>
        <p>Community</p>
        <a href="/" className='nav-link'>Spark</a>
        <a href="/" className='nav-link'>Challenges</a>
        <a href="/" className='nav-link'>Topics</a>
        <a href="/" className='nav-link'>Code of Conduct</a>
      </ul>
      </div>
      <div className="foot-panel3">
        <div className="pages">
          <a href="/" className='nav-link'>Conditions of Use</a>
          <a href="/" className='nav-link'>Privacy Notice</a>
          <a href="/" className='nav-link'>Your Ads Privacy Choices</a>
        </div>
        <div className="copyright">
        © 1996-2023, EffiReads.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;
