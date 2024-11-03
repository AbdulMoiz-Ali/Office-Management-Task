import React, { useState } from 'react';
import manager1 from '../../assets/manager1.png';
import Status from '../../components/button/Status';
import { IoIosArrowDown } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import manager2 from '../../assets/image-1.png';
import manager3 from '../../assets/image-2.png';
import StatusMenu from '../../components/cards/StatusMenu';
import { Navigation } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const userData = [
    {
        jobTitle: 'Senior Product Designer',
        department: 'Design',
        manager: 'Darrell',
        status: 'Ongoing',
        datePosted: '17, Oct, 2020',
        requiredBy: '20, Oct, 2020',
        managerImage: manager1,
    },
    {
        jobTitle: 'Junior Developer',
        department: 'Development',
        manager: 'Alice',
        status: 'Review',
        datePosted: '15, Oct, 2020',
        requiredBy: '22, Oct, 2020',
        managerImage: manager2,
    },
    {
        jobTitle: 'Project Manager',
        department: 'Management',
        manager: 'Bob',
        status: 'Publish',
        datePosted: '10, Oct, 2020',
        requiredBy: '18, Oct, 2020',
        managerImage: manager3,
    },
    {
        jobTitle: 'Marketing Specialist',
        department: 'Marketing',
        manager: 'Catherine',
        status: 'Paused',
        datePosted: '12, Oct, 2020',
        requiredBy: '25, Oct, 2020',
        managerImage: manager1,
    },
    {
        jobTitle: 'UX Designer',
        department: 'Design',
        manager: 'David',
        status: 'Hired',
        datePosted: '08, Oct, 2020',
        requiredBy: '20, Oct, 2020',
        managerImage: manager3,
    },
    {
        jobTitle: 'Backend Developer',
        department: 'Development',
        manager: 'Emma',
        status: 'Ongoing',
        datePosted: '11, Oct, 2020',
        requiredBy: '23, Oct, 2020',
        managerImage: manager3,
    },
    {
        jobTitle: 'Data Analyst',
        department: 'Data',
        manager: 'Frank',
        status: 'Cancelled',
        datePosted: '16, Oct, 2020',
        requiredBy: '26, Oct, 2020',
        managerImage: manager2,
    },
    {
        jobTitle: 'Frontend Developer',
        department: 'Development',
        manager: 'Grace',
        status: 'Denied',
        datePosted: '09, Oct, 2020',
        requiredBy: '24, Oct, 2020',
        managerImage: manager3,
    },
    {
        jobTitle: 'HR Manager',
        department: 'HR',
        manager: 'Hannah',
        status: 'Onboarding',
        datePosted: '14, Oct, 2020',
        requiredBy: '21, Oct, 2020',
        managerImage: manager1,
    },
    {
        jobTitle: 'Sales Associate',
        department: 'Sales',
        manager: 'Ian',
        status: 'Hired',
        datePosted: '13, Oct, 2020',
        requiredBy: '27, Oct, 2020',
        managerImage: manager3,
    },
    {
        jobTitle: 'Junior Developer',
        department: 'Development',
        manager: 'Alice',
        status: 'Closed',
        datePosted: '15, Oct, 2020',
        requiredBy: '22, Oct, 2020',
        managerImage: manager2,
    },
    {
        jobTitle: 'Project Manager',
        department: 'Management',
        manager: 'Bob',
        status: 'Publish',
        datePosted: '10, Oct, 2020',
        requiredBy: '18, Oct, 2020',
        managerImage: manager3,
    },
    {
        jobTitle: 'Marketing Specialist',
        department: 'Marketing',
        manager: 'Catherine',
        status: 'Paused',
        datePosted: '12, Oct, 2020',
        requiredBy: '25, Oct, 2020',
        managerImage: manager1,
    },
    {
        jobTitle: 'UX Designer',
        department: 'Design',
        manager: 'David',
        status: 'Hired',
        datePosted: '08, Oct, 2020',
        requiredBy: '20, Oct, 2020',
        managerImage: manager3,
    },

];


const AllRequisitions = () => {
    const navigate = useNavigate()
    const [activeMenu, setActiveMenu] = useState(null);
    const toggleMenu = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    }

    const handleRowClick = (user) => {
        // Store user data in sessionStorage
        sessionStorage.setItem('selectedUser', JSON.stringify(user));
        console.log("first")
        // Navigate to the status page with the job title as an identifier
        navigate(`/status/${user.jobTitle}`);
    };

    return (
        <div className='flex flex-col gap-4 mt-4'>
            <div className='w-full'>
                {/* Responsive Table Wrapper */}
                <div className=" hidden md:block">
                    <table className="min-w-full">
                        <thead>
                            <tr className="text-slate-500 font-light">
                                <th className="px-4 py-2 text-left">Job Title</th>
                                <th className="px-4 py-2 text-left">Department <IoIosArrowDown className='inline ml-1' /></th>
                                <th className="px-2 py-2 text-left">Recruitment Manager <IoIosArrowDown className='inline ml-1' /></th>
                                <th className="px-4 py-2 text-left">Status <IoIosArrowDown className='inline ml-1' /></th>
                                <th className="px-2 py-2 text-left">Date Posted</th>
                                <th className="px-2 py-2 text-left">Required By</th>
                                <th className="px-2 py-2 text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user, index) => (
                                <tr key={index} className="font-medium relative  cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleRowClick(user)}
                                >
                                    <td className="px-4 py-2">{user.jobTitle}</td>
                                    <td className="px-4 py-2">{user.department}</td>
                                    <td className="px-4 py-2 flex items-center">
                                        <img src={user.managerImage} className="w-6 h-6 mr-1 rounded-full" alt={user.manager} />
                                        {user.manager}
                                    </td>
                                    <td className="px-4 py-2">
                                        <Status status={user.status} width={120} />
                                    </td>
                                    <td className="px-2 py-2">{user.datePosted}</td>
                                    <td className="px-2 py-2">{user.requiredBy}</td>
                                    <td className="px-2 py-2 ">
                                        <HiDotsHorizontal onClick={() => toggleMenu(index)} className="cursor-pointer" />
                                        {activeMenu === index && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg ">
                                                <StatusMenu statusCard={user.status} />
                                            </div>
                                        )}
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>


                <div className="block md:hidden">
                    {userData.map((user, index) => (
                        <div key={index} className="border rounded-lg p-4 mb-4 bg-white shadow-sm relative">
                            <div className="flex justify-between items-center mb-2">
                                <div className="font-semibold">{user.jobTitle}</div>
                                <HiDotsHorizontal onClick={() => toggleMenu(index)} className="cursor-pointer" />
                                {activeMenu === index && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                                        <StatusMenu statusCard={user.status} />
                                    </div>
                                )}
                            </div>
                            <div className="text-sm text-gray-500 mb-2">{user.department}</div>
                            <div className="flex items-center mb-2">
                                <img src={user.managerImage} className='w-6 h-6 mr-2 rounded-full' alt={user.manager} />
                                <span className="text-sm">{user.manager}</span>
                            </div>
                            <div className="mb-2">
                                <Status status={user.status} width={100} />
                            </div>
                            <div className="text-sm text-gray-500">
                                <div>Date Posted: <span className="text-gray-700">{user.datePosted}</span></div>
                                <div>Required By: <span className="text-gray-700">{user.requiredBy}</span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllRequisitions;
