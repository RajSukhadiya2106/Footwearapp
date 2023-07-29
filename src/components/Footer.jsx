import React from 'react';
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";
import Instagram from "../img/instagram.png";
import LinkedIn from "../img/linkedin.png";
import Typewriter from 'typewriter-effect';



const Footer = () => {
  return (
    <footer className="light bg-orange-500 text-white text-center px-4">
      <div className="flex items-center justify-center gap-4 mb-4">

        <div className="text-4xl font-bold text-center mt-8 text-blue-900 ">
          <Typewriter
            options={{
              strings: ['Thank You For Visiting Our Website!! Visit Again'],
              autoStart: true,
              loop: true,
            }}
          />

        </div>
      </div>
      <div className="flex items-center justify-between text-blue-900">
        <div className="text-left">
          <p className='text-md font-semibold'>
            CopyRight Sukhadiya Footwear @2023
          </p>

          <p className="text-sm">
            Contact: <span className="underline align-bottom">9328915405</span>
          </p>
          <p>
            Email: <a href="mailto:rajsukhadiya387@gmail.com" className="underline">rajsukhadiya387@gmail.com</a>
          </p>

        </div>
        <div className="flex items-center gap-8">
          <a href="https://www.facebook.com/raj.sukhadiya.9461" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="https://github.com/RajSukhadiya21" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/sukhadiya-raj-867bb21ab/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/rajsukhadiya_20/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
