import React from 'react';
import Shop from './Shop';
import './Shop.css'

const Shops = () => {
    const shops = [
        {
            image: 'https://scooby-nextjs.vercel.app/assets/images/bg/category/h3-collection-01.png',
            title: 'Whiskas Cat Food Core Tuna',
            price: 10,
        },
        {
            image: 'https://scooby-nextjs.vercel.app/assets/images/bg/category/h3-collection-02.png',
            title: 'Friskies Kitten Discoveries.',
            price: 20,
        },
        {
            image: 'https://scooby-nextjs.vercel.app/assets/images/bg/category/h3-collection-03.png',
            title: 'Joules Cat Cotton House.',
            price: 25,
        },
        {
            image: 'https://scooby-nextjs.vercel.app/assets/images/bg/category/h3-collection-04.png',
            title: 'WNatural Dog Fresh Food.',
            price: 45,
        },
        {
            image: 'https://scooby-nextjs.vercel.app/assets/images/bg/category/h3-collection-05.png',
            title: 'Ferplast Cat Journey Bag.',
            price: 5,
        },
        {
            image: 'https://scooby-nextjs.vercel.app/assets/images/bg/category/h3-collection-06.png',
            title: 'Jungle Excellence Of Nature',
            price: 15,
        },
    ]
    return (
        <div id='shop'>
            <h1 className='text-center font-bold text-3xl mt-14'>Pet <span className='text-Food'>Food</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-3 mt-5'>
            {
                shops.map((shop, i) => <Shop
                key={i}
                shop={shop}
                ></Shop>)
            }
        </div>
        <div>
            {

            }
        </div>
        </div>
    );
};

export default Shops;