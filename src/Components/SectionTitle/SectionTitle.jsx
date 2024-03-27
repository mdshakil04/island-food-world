/* eslint-disable no-unused-vars */
import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=' md:w-3/12 mx-auto'>
            <p className=' text-yellow-600 text-center'>---{subHeading}---</p>
            <h3 className=' border-y-4 my-4 p-2 text-3xl uppercase text-center font-bold'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;