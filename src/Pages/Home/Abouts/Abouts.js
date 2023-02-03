import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './About.css'
import { motion } from "framer-motion"

const Abouts = () => {
    return (
        <motion.div
        id='about'
        className="hero max-h-screen mt-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://scooby-nextjs.vercel.app/assets/images/blog/blog8.png" alt='' className="min-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl mr-40 font-bold">Ingredients For Dogs <br /> <span className='text-Food'>With Packages.</span></h1>
      <button className="btn btn-primary btn-auto mt-4 font-bold shop-var text-lg">SHOP Now <FaArrowRight className='text-center'/></button>
    </div>
  </div>
</motion.div>
    );
};

export default Abouts;