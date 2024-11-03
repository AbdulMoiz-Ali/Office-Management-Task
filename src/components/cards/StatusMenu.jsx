// StatusMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const StatusMenu = ({ statusCard }) => {
    return (
        <div className="absolute bg-white border rounded shadow-lg py-2 top-full  right-3 w-48 z-10">
            <ul className="flex flex-col">
                {statusCard === 'Ongoing' && (
                    <>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Go to candidates</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Job overview</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Edit job details</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Close this job</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-t">
                            <Link to="#" className="block w-full text-sm text-red-500">Delete this job</Link>
                        </li>
                    </>
                )}
                {statusCard === 'Review' && (
                    <>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link to="#" className="block w-full text-sm text-gray-700">Go to candidates</Link>
                    </li>
                       <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                       <Link to="#" className="block w-full text-sm text-gray-700">Close this job</Link>
                   </li>
                   <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                       <Link to="#" className="block w-full text-sm text-red-500 border-t">Delete this job</Link>
                   </li>
                   </>
                )}
                {statusCard === 'Publish' && (
                    <>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Publish this job</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Job overview</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Edit job details</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-red-500 border-t">Delete this job</Link>
                        </li>
                    </>
                )}
                {statusCard === 'Denied' && (
                    <>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">See Commints</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Re Submitt</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Job overview</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Edit job details</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-red-500 border-t">Delete this job</Link>
                        </li>
                    </>
                )}
                {statusCard === 'Hired' && (
                    <>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Job overview</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Move To Onboarding</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-400 border-t">Delete this job</Link>
                        </li>
                    </>
                )}
                {statusCard === 'Onboarding' && (
                    <>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Job overview</Link>
                        </li>
                       
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-400 border-t">Delete this job</Link>
                        </li>
                    </>
                )}
                {statusCard === 'Cancelled' && (
                    <>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Job overview</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-red-500 border-t">Delete this job</Link>
                        </li>
                    </>
                )}
                 {statusCard === 'Closed' && (
                    <>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Job overview</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-red-500 border-t">Delete this job</Link>
                        </li>
                    </>
                )}
                {statusCard === 'Paused' && (
                    <>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link to="#" className="block w-full text-sm text-gray-700">Resume This job</Link>
                    </li>
                   
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link to="#" className="block w-full text-sm text-gray-700">Job overview</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link to="#" className="block w-full text-sm text-gray-700">Edit job details</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link to="#" className="block w-full text-sm text-red-500 border-t">Delete this job</Link>
                    </li>
                </>
                )}
                {!['Ongoing', 'Review', 'Publish', 'Hired', 'Cancelled','Onboarding','Closed','Denied','Paused'].includes(statusCard) && (
                    <>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Job overview</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-gray-700">Edit job details</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Link to="#" className="block w-full text-sm text-red-500 border-t">Delete this job</Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default StatusMenu;
