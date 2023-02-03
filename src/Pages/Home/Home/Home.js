import React from 'react'
import Banner from '../../Banner/Banner';
import Abouts from '../Abouts/Abouts';
import ContactMe from '../ContactMe/ContactMe';
import Coustumars from '../Coustumar/Coustumars';
import Shops from '../Shops/Shops';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Shops></Shops>
            <Abouts></Abouts>
            <Coustumars></Coustumars>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;