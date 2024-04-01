/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
import Category from './../Category/Category';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section className=' mt-4'>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
            ></SectionTitle>
            <div className=' grid md:grid-cols-2 gap-10 p-4 my-8'>
                {
                    popular.map(item => <MenuItem
                    key={item.id}
                    item = {item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;