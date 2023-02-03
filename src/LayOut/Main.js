import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer/Footer';
import NavBar from '../Sheared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;