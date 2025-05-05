import React from 'react';
import Home from '../Pages/Home';
import NewsCard from '../Components/NewsCard';
import NewsMarquee from '../Components/NewsMarquee';



const HomeLayout = () => {
    return (
        <div>
            <NewsMarquee></NewsMarquee>
            <Home></Home>
            <NewsCard></NewsCard>
        </div>
    );
};

export default HomeLayout;