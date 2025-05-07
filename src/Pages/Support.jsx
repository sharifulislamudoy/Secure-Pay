import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Support = () => {
    const [supportItems, setSupportItems] = useState([]);

    useEffect(() => {
        fetch('/Support.json')
            .then(res => res.json())
            .then(data => setSupportItems(data));
    }, []);

    return (
        <div className="w-11/12 lg:w-4/5 mx-auto my-10 text-gray-800">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-blue-700 mb-2">Need Help? We're Here</h1>
                <p className="text-gray-600">Our support team is available 24/7 to assist you with any issue.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {supportItems.map(item => (
                    <Link to={item.path} key={item.id} className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Support;
