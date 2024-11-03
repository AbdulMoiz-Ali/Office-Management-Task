// Status.js
import React from 'react';

const StatusCard = ({ statusCard }) => {
    const statusStyles = {
        Ongoing: 'bg-blue-100 text-blue-500',
        Review: 'bg-yellow-100 text-yellow-500',
        Publish: 'bg-green-100 text-green-500',
        Hired: 'bg-purple-100 text-purple-500',
        Cancelled: 'bg-red-100 text-red-500',
    };

    return (
        <span className={`px-3 py-1 rounded-full ${statusStyles[statusCard] || 'bg-gray-100 text-gray-500'}`}>
            {statusCard}
        </span>
    );
};

export default StatusCard;
