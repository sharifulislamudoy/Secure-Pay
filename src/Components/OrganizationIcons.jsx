import React, { useEffect, useState } from 'react';

const OrganizationIcons = () => {
    const [organizations, setOrganizations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/Organization.json')
            .then(res => res.json())
            .then(data => {
                setOrganizations(data);
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

    return (
        <div className="w-11/12 mx-auto my-10">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">We Work With</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 items-center">
                {organizations.map(org => (
                    <div
                        key={org.id}
                        className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
                    >
                        <img
                            src={org.icon}
                            alt={org.type}
                            className="w-12 h-12 object-contain mb-2"
                        />
                        <p className="text-sm font-medium text-gray-700 text-center">{org.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrganizationIcons;
