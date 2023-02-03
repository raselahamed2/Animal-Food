import React from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const Shop = ({ shop }) => {
    const { image, title, price } = shop
    return (
        <motion.div className="card w-96 bg-base-100 shadow-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}>
            <figure className=''>
                <Link><img className='p-14 bg-slate-100 rounded-3xl mt-2' src={image} alt="" /></Link>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-xl font-semibold text-Food'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline border-none">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                        <button className="btn btn-auto hidden hover:display mt-4 font-bold shop-var"><Link to='/shop'>Shop Now</Link></button>
                
                </div>
            </div>
        </motion.div>
    );
};

export default Shop;