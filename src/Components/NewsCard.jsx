import React, { useEffect, useState } from 'react';

const NewsCard = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    useEffect(() => {
        fetch('/BankNews.json')
            .then(res => res.json())
            .then(data => {
                setNews(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <span className="loading loading-dots loading-lg text-blue-600"></span>
            </div>
        );
    }

    const visibleNews = showAll ? news : news.slice(0, 6);

    const handleShowAll = () => {
        setIsLoadingMore(true);
        setTimeout(() => {
            setShowAll(true);
            setIsLoadingMore(false);
        }, 2000);
    };

    return (
        <div className='w-11/12 mx-auto my-6'>
            <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">Latest Bank News</h2>

            {isLoadingMore ? (
                <div className="flex justify-center items-center h-32">
                    <span className="loading loading-dots loading-lg text-blue-600"></span>
                </div>
            ) : (
                <>
                    <ul className="grid lg:grid-cols-2 gap-3">
                        {visibleNews.map(item => (
                            <li key={item.id} className="border p-4 rounded-xl shadow-md hover:shadow-lg transition bg-white">
                                <h3 className="text-lg font-semibold text-blue-700">{item.headline}</h3>
                                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                                <div className="text-xs text-gray-500">
                                    📅 {item.publishedDate} | 👁️ {item.views} views
                                </div>
                            </li>
                        ))}
                    </ul>
                    {!showAll && (
                        <div className="text-center mt-6">
                            <button
                                onClick={handleShowAll}
                                className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                See All News
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default NewsCard;
