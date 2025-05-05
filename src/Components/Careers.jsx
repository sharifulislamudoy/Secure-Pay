import React from 'react';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Dhaka, Bangladesh',
      type: 'Full-Time',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      location: 'Remote',
      type: 'Full-Time',
    },
    {
      id: 3,
      title: 'Customer Support Specialist',
      location: 'Dhaka, Bangladesh',
      type: 'Part-Time',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Careers at SecurePay</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Join our mission to build secure, user-friendly, and innovative banking solutions for everyone. 
          Be part of a passionate team that values growth, creativity, and impact.
        </p>
      </div>

      {/* Company Values */}
      <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
        <div className="p-6 bg-blue-50 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Security First</h3>
          <p className="text-gray-600 text-sm">We prioritize user safety in everything we build — with encryption, compliance, and trust at the core.</p>
        </div>
        <div className="p-6 bg-blue-50 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Remote Friendly</h3>
          <p className="text-gray-600 text-sm">We empower teams from anywhere, offering flexibility, autonomy, and a digital-first culture.</p>
        </div>
        <div className="p-6 bg-blue-50 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Career Growth</h3>
          <p className="text-gray-600 text-sm">We invest in your growth through mentorship, training, and clear advancement paths.</p>
        </div>
      </div>

      {/* Job Listings */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Openings</h2>
        {jobOpenings.length > 0 ? (
          <ul className="space-y-6">
            {jobOpenings.map(job => (
              <li
                key={job.id}
                className="border border-gray-200 p-6 rounded-xl hover:shadow-md transition"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-700">{job.title}</h3>
                    <p className="text-gray-500 text-sm">{job.location} · {job.type}</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Apply Now
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No openings at this time. Check back soon!</p>
        )}
      </div>
    </div>
  );
};

export default Careers;
