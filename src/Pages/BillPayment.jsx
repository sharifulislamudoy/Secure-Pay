import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const BillPayment = () => {
    const navigate = useNavigate();
    const [bills, setBills] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('/Billing.json')
            .then(res => res.json())
            .then(data => setBills(data));
    }, []);

    const visibleBills = showAll ? bills : bills.slice(0, 6);

    const handleShowAll = () => {
        setIsLoading(true);
        setTimeout(() => {
            setShowAll(true);
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="p-4 w-5/6 mx-auto my-10">
            <h2 className="text-2xl font-bold mb-8 text-black text-center">Upcoming Bill Payments</h2>

            {isLoading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {visibleBills.map(item => (
                            <div className="card bg-white shadow-md rounded-xl overflow-hidden" key={item.id}>
                                <div className="flex items-center gap-4 p-4">
                                    <img
                                        src={item.icon}
                                        alt={item.category}
                                        className="w-16 h-16 object-contain"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-950">{item.category}</h3>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                        <p className="text-sm text-gray-500">Organization: {item.organization}</p>
                                        <p className="text-sm text-gray-500">Due: {item.dueDate}</p>
                                        <p className="font-bold text-blue-600 mt-1">৳ {item.amount}</p>
                                    </div>
                                </div>
                                <div className="card-actions p-4 pt-0">
                                    <button className="btn btn-primary w-full" onClick={() => navigate(`/billdetails/${item.id}`)}>See Details</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {!showAll && (
                        <div className="text-center mt-6">
                            <button
                                onClick={handleShowAll}
                                className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            >
                                See All Bills
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default BillPayment;
