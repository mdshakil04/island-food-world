/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Recommendation from '../Recomendation/Recommendation';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Island Food World | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Recommendation></Recommendation>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;