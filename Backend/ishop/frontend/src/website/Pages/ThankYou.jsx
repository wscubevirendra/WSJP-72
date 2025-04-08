import React from "react";
import { useParams } from "react-router-dom";

const ThankYou = () => {
    const { orderId } = useParams();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-green-600 mb-4">Thank You for Your Purchase!</h1>
                <p className="text-gray-700 mb-2">Your order has been placed successfully.OrderId:{orderId}</p>
                <p className="text-gray-700">We appreciate your business and hope to see you again soon!</p>
            </div>
            <div className="mt-8">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
                    <svg
                        className="w-8 h-8 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;