import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('transactions')) || [];
        setTransactions(data);
    }, []);

    if (transactions.length === 0) {
        return <div className='min-h-screen flex justify-center items-center flex-col'>
            <p className="font-bold text-red-600 text-2xl my-10">No Transactions Yet.</p>
            <Link to={'/paybills'} className='bg-red-600 p-4 rounded-lg'>Go For Paying Due Bills</Link>
        </div>
    }

    return (
        <div className="w-11/12 lg:w-5/6 mx-auto my-10">
            <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Transaction History</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {transactions.map((item, index) => (
                    <div key={index} className="border p-4 rounded-xl shadow-md bg-white">
                        <h3 className="text-lg font-semibold text-black">{item.category}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                        <p className="text-sm text-gray-500">Organization: {item.organization}</p>
                        <p className="text-sm text-gray-500">Amount: ৳ {item.amount}</p>
                        <p className="text-xs text-gray-400">Paid at: {item.paidAt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionHistory;
