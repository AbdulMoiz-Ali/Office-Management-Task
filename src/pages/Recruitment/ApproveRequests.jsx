import React from 'react';
import manager1 from '../../assets/manager1.png';
import manager2 from '../../assets/image-1.png';
import manager3 from '../../assets/image-2.png';
import { HiDotsHorizontal } from "react-icons/hi";
import { FaAngleDown, FaRegCheckCircle, FaArrowRight } from "react-icons/fa";




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
        jobTitle: 'Junior Developer',
        department: 'Development',
        manager: 'Alice',
        status: 'Review',
        datePosted: '15, Oct, 2020',
        requiredBy: '22, Oct, 2020',
        managerImage: manager1,
    },
    {
        jobTitle: 'Junior Developer',
        department: 'Development',
        manager: 'Alice',
        status: 'Review',
        datePosted: '15, Oct, 2020',
        requiredBy: '22, Oct, 2020',
        managerImage: manager3,
    },
    // Add more items as needed
];

const ApproveRequests = () => {
    return (
        <div className='flex flex-col gap-4 mt-4'>
            <div className='flex justify-between items-center'>
                <h2 className='text-lg font-bold'>Approve Requests</h2>
                <div className='flex gap-2'>
                    <button className='border rounded-full px-3 py-2 flex items-center'>
                        By Position <FaAngleDown className='ml-1' />
                    </button>
                    <button className='border rounded-full px-3 py-2 flex items-center'>
                        By Category <FaAngleDown className='ml-1' />
                    </button>
                    <button className='border rounded-full px-3 py-2 flex items-center'>
                        <FaRegCheckCircle className='mr-1' /> Select All
                    </button>
                </div>
            </div>

            {/* Approve Requests Cards */}
            {userData.map((user, index) => (
                <div key={index} className="border rounded-lg p-4 mb-2">
                    <div className='flex justify-between border-b '>
                        <div className='text-[17px] font-semibold m-2 '>{user.jobTitle}</div>
                        <HiDotsHorizontal className="cursor-pointer" />
                    </div>
                    <div className='flex justify-between items-center mt-3'>
                        <div className='flex gap-3 items-center'>
                            <input type='checkbox' className='cursor-pointer' />
                            <img src={user.managerImage} className="w-8 h-8 rounded-full" alt='Manager' />
                            <div>
                                <p className='font-semibold text-gray-500 '>Recruiting Manager</p>
                                <p className='font-semibold'>{user.manager}</p>
                            </div>
                        </div>
                        <div className='text-sm'>
                            <p className='font-semibold text-gray-500 ' >Date Posted</p>
                            <p className='font-semibold'>{user.datePosted}</p>
                        </div>
                        <div className='text-sm'>
                            <p className='font-semibold text-gray-500 '>Required By</p>
                            <p className='font-semibold'>{user.requiredBy}</p>
                        </div>
                        <div className='text-sm'>
                            <p className='font-semibold text-gray-500 '>Department</p>
                            <p className='font-semibold'>{user.department}</p>
                        </div>
                        <div className='flex gap-2'>
                            <button className='border rounded-lg px-3 py-1 flex items-center bg-[#6047F9] text-white'>
                                <FaRegCheckCircle className='mr-1 ' /> Approve
                            </button>
                            <button className='border rounded-lg px-3 py-1 flex items-center'>
                                See Details <FaArrowRight className='ml-1' />
                            </button>
                        </div>
                    </div>
                </div>
            ))}

           
            
        </div>
    );
};

export default ApproveRequests;
