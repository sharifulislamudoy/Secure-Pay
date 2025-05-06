import React, { useEffect, useState } from 'react';

const ServicesOverview = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Services.json')
      .then(res => res.json())
      .then(data => {
        setServices(data);
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
    <div className="w-11/12 mx-auto my-12">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-2">
        What You Can Do with SecurePay
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Explore all the services we offer to make your digital payments easier.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <div
            key={service.id}
            className="border p-5 rounded-xl shadow hover:shadow-lg transition bg-white flex flex-col items-center text-center"
          >
            <h3 className="text-lg font-semibold text-blue-700 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;
