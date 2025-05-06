import React from 'react';
import { FaTags } from 'react-icons/fa';

const offers = [
  {
    id: 1,
    title: "10% Cashback on Electricity Bill",
    description: "Pay your DESCO or NESCO bill via SecurePay and get instant 10% cashback.",
    badge: "Cashback",
    image: "https://i.ibb.co.com/wF4Jt9Jj/Untitled-design-48.png"
  },
  {
    id: 2,
    title: "Flat 30% Off on Mobile Recharge",
    description: "Recharge your Banglalink, Robi, or GP number and enjoy instant savings.",
    badge: "Limited Time",
    image: "https://i.ibb.co.com/CprF8V1W/Untitled-design-49.png"
  },
  {
    id: 3,
    title: "Win Smartwatch by Paying Water Bill",
    description: "Pay WASA bills and get a chance to win a branded smartwatch every week.",
    badge: "Win Gift",
    image: "https://i.ibb.co.com/Z62QQt5h/Untitled-design-50.png"
  }
];

const Promotions = () => {
  return (
    <section className="w-11/12 mx-auto my-16">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-2">
        Promotions & Offers
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Enjoy exclusive deals, cashback, and exciting rewards only on SecurePay
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-2 font-medium">
                {offer.badge}
              </span>
              <h3 className="text-lg font-semibold text-blue-700">{offer.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                Avail Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promotions;
