/* eslint-disable no-unused-vars */
import React from 'react';

const MenuItem = ({item}) => {
    const {image, name, price, recipe} = item;
    return (
        <div className=' flex space-x-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className=' w-[120px]' src={image} alt="" />
            <div>
                <h3 className=' upercase'>{name}......</h3>
                <p>{recipe}</p>
            </div>
            <p className=' text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;