import React from 'react';
import Home from '../Pages/Home';
import NewsCard from '../Components/NewsCard';
import NewsMarquee from '../Components/NewsMarquee';
import OrganizationIcons from '../Components/OrganizationIcons';
import ServicesOverview from '../Components/ServicesOverview';
import AppDownload from '../Components/AppDownload';
import Promotions from '../Components/Promotions';



const HomeLayout = () => {
    return (
        <div>
            <NewsMarquee></NewsMarquee>
            <Home></Home>
            <NewsCard></NewsCard>
            <ServicesOverview></ServicesOverview>
            <Promotions></Promotions>
            <AppDownload></AppDownload>
            <OrganizationIcons></OrganizationIcons>
        </div>
    );
};

export default HomeLayout;