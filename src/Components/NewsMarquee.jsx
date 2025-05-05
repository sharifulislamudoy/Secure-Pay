import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const NewsMarquee = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
            fetch('/BankNews.json')
                .then(res => res.json())
                .then(data => {
                    setNews(data);
                });
        }, []);

    return (
        <div className='flex lg:w-11/12 mx-auto p-4'>
            <span className='bg-blue-800 px-5 py-2 rounded-l-lg'>Latest</span>
            <Marquee speed={50} pauseOnHover className='bg-blue-300 rounded-r-lg'>
                {news.map(item => (
                    <p key={item.id} className='mx-4'>{item.headline},</p>
                ))}
            </Marquee>
        </div>
    );
};

export default NewsMarquee;