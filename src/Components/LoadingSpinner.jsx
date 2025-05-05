import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-[#F9FAFB] text-black">
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default LoadingSpinner;