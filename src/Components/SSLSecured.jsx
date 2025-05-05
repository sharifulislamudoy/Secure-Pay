import React from 'react';
import { ShieldCheck } from 'lucide-react'; // Optional: Lucide icon

const SSLSecured = () => {
    return (
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl shadow-md flex items-center gap-4 max-w-3xl mx-auto my-10">
            <div className="p-4 bg-blue-100 rounded-full">
                <ShieldCheck className="text-blue-600 w-8 h-8" />
            </div>
            <div>
                <h2 className="text-xl font-semibold text-blue-800">SSL Secured</h2>
                <p className="text-gray-700 text-sm">
                    Your connection to SecurePay is encrypted with 256-bit SSL. All data transfers are securely protected
                    against tampering and interception.
                </p>
            </div>
        </div>
    );
};

export default SSLSecured;
