import React from 'react';
import Coustumar from './Coustumar';

const Coustumars = () => {
    const coustumars = [
        {
            img: 'https://scooby-nextjs.vercel.app/assets/images/bg/h3-autho-1.png',
            name: 'Sebastian Ethan',
            title: 'Customer',
            details: 'Pellentesque maximus augue orci, quis congue puru Pellentesque maximus augue orci, quis congue coug purus iaculis idl Maecenas eu lorem quis massal outi molestie vulputate in sit ameti diam.'
        },
        {
            img: 'https://scooby-nextjs.vercel.app/assets/images/bg/h3-autho-2.png',
            name: 'Lokand Donark',
            title: 'Customer',
            details: 'Pellentesque maximus augue orci, quis congue puru Pellentesque maximus augue orci, quis congue coug purus iaculis idl Maecenas eu lorem quis massal outi molestie vulputate in sit ameti diam.'
        },
        {
            img: 'https://scooby-nextjs.vercel.app/assets/images/bg/h3-autho-3.png',
            name: 'Angelina Gushe',
            title: 'Customer',
            details: 'Pellentesque maximus augue orci, quis congue puru Pellentesque maximus augue orci, quis congue coug purus iaculis idl Maecenas eu lorem quis massal outi molestie vulputate in sit ameti diam.'
        },
    ]
    return (
       <div>
        <h2 className='font-bold text-3xl text-center my-24'>Customers Think <span className='text-Food'>About Us</span></h2>
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-3 mt-5'>
            {
                coustumars.map((coustumar, i) => <Coustumar
                key={i}
                coustumar={coustumar}
                ></Coustumar>)
            }
        </div>
       </div>
    );
};

export default Coustumars;