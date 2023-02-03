import React from 'react';
import './Coustumar.css'
import { motion } from "framer-motion"

const Coustumar = ({ coustumar }) => {
    const { name, img, title, details } = coustumar
    return (
        <motion.div 
        initial = {{opacity: 0}}
        whileInView = {{opacity: 5}}
        transition = {{delay: 0.3}}
        className="card w-96 p-5 bg-base-200 shadow-xl">
            <div className="card-body">
            <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                <p>{details}</p>
            </div>
            <div className="avatar">
                <div className="w-20 rounded-full">
                    <img src={img} alt='' />
                </div>
                <h2 className="card-title ml-6">{name}</h2>
                <span className='mt-14 text-Food'>{title}</span>
            </div>

        </motion.div>
    );
};

export default Coustumar;