import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router';
import { useParams } from 'react-router-dom';

const BillDetails = () => {
    const { id } = useParams();
    const [bill, setBill] = useState(null);
    const [paid, setPaid] = useState(false);

    useEffect(() => {
        fetch('/Billing.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(item => item.id === id);
                setBill(found);
            });
    }, [id]);

    const handlePayNow = () => {
        if (!paid) {
            toast.success('Payment Successful.');
            setPaid(true);
            const existing = JSON.parse(localStorage.getItem('transactions')) || [];

            const newTransaction = {
                ...bill,
                paidAt: new Date().toLocaleString()
            };
            localStorage.setItem('transactions', JSON.stringify([...existing, newTransaction]));
        }
        else {
            toast.error('You have already paid this bill.')
        }
    };

    if (!bill) {
        return <div className="text-center mt-10">Loading bill details...</div>;
    };

    return (

        <div className="text-black shadow-sm bg-white w-5/6 mx-auto my-6 flex justify-between items-center rounded-2xl">
            <figure>
                <img
                    src={bill.icon} alt={bill.category} className="w-50" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-black">{bill.category}</h2>
                <p className='text-xs lg:text-lg text-gray-500'>{bill.description}</p>
                <p className="text-xs lg:text-lg text-gray-500">Organization: {bill.organization}</p>
                <p className="text-xs lg:text-lg text-gray-500">Due Date: {bill.dueDate}</p>
                <p className="font-bold text-blue-600 mt-1">Amount: ৳ {bill.amount}</p>
                <div className="card-actions justify-end">
                    <Link to={'/transactionhistory'} onClick={handlePayNow} className="btn btn-primary">Pay Now</Link>
                </div>
            </div>
        </div>
    );
};

export default BillDetails;
