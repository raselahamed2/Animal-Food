import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import './NavBar.css'

const NavBar = () => {
    const menuBar = (
        <React.Fragment>
            <li><a href='#home' className=''>HOME</a></li>
            <li><a href='#about' className=''>ABOUT US</a></li>
            <li><a href='#shop' className=''>SHOP</a></li>
            <li><a href='#contact' className=''>CONTACT</a></li>
        </React.Fragment>
    )
    return (
        <motion.div
        initial={{y:-800}}
        animate={{y:0}}
        transition={{delay: 1/2}}
        className="navbar Nab-content">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact text-xl navbar-end dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        {menuBar}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl animal">𝒜𝓃𝒾𝓂𝒶𝓁 𝐹🍪❀𝒹</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuBar}
                </ul>
            </div>
            <div className="">
            </div>
        </motion.div>
    );
};

export default NavBar;