/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Recommendation from '../Recomendation/Recommendation';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Recommendation></Recommendation>
            <Featured></Featured>
        </div>
    );
};

export default Home;