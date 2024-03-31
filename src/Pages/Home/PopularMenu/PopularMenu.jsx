/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)})
    },[])
    return (
        <section className=' mt-4'>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
            ></SectionTitle>
            <div className=' grid md:grid-cols-2 gap-10 p-4 my-8'>
                {
                    menu.map(item => <MenuItem
                    key={item.id}
                    item = {item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;