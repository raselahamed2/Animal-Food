import React from 'react';
import { motion } from "framer-motion"

const ContactMe = () => {
    return (
        <motion.div 
        id='contact'
        initial = {{opacity: 0}}
        whileInView = {{opacity: 1}}
        transition = {{delay: 0.5}}
        className="hero max-h-screen bg-pink-100 rounded-xl my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center  lg:text-left">
                    <img className='' src="https://scooby-nextjs.vercel.app/assets/images/bg/h3-newsletter-img.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg mr-60">
                    <div className="card-body">
                        <h3 className='text-Food'>Get In Touch</h3>
            <h1 className='font-bold text-2xl text-slate-800 mb-3'>Let’s Connect Our Newsletter</h1>
                        <div className="form-control">
                            <div className="input-group">
                                <input type="Email" placeholder="Email" className="input input- h-16 w-full" />
                                <button className="btn btn-auto shop-var border-none h-16">
                                Contact
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactMe;