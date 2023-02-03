import React from 'react';
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';

const DogFoods = () => {
    return (
        <motion.div
        initial = {{opacity: 0}}
        whileInView = {{opacity: 1}}
        transition = {{delay: 0.3}}
        className="hero max-h-screen bg-pink-100 mt-5">
  <div className="hero-content flex-col  lg:flex-row-reverse">
    <img src="https://htmldemo.net/tuime/tuime/assets/img/slider/slider-01.webp" alt='' className="max-w-xl ml-56 rounded-lg shadow-2xl bg-amber-400 right-5 rounded" />
    <div>
      <h1 className="text-5xl font-bold mr-24">Best <span className='text-Food'>Food For</span> <br />
      <Typewriter
  options={{
    strings: ['Your Loving Dog', 'Your Loving Dog'],
    autoStart: true,
    delay: 200,
    loop: true,
  }}
/>
      </h1>
      <button className="btn btn-auto mt-4 font-bold shop-var text-lg">SHOP Now</button>
    </div>
    
  </div>
</motion.div>
    );
};

export default DogFoods;