import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4">
            <img
                src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
                alt="Error Icon"
                className="w-32 h-32 mb-6 animate-pulse"
            />
            <h1 className="text-5xl font-bold text-red-600 mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Page Not Found
            </h2>
            <p className="text-gray-600 max-w-md mb-6">
                Sorry, the page you're looking for doesn't exist or has been moved.
                If you believe this is a mistake, please contact SecurePay support.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
