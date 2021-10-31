import React from 'react';
import Package from '../Package/Package';
import Guides from './Guides/Guides';
import Slider from './Slider/Slider';
import Travel_Specials from './Travel_Specials/Travel_Specials';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Package></Package>
            <Travel_Specials></Travel_Specials>
            <Guides></Guides>
        </div>
    );
};

export default Home;