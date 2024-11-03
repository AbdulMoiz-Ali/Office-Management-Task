/** @format */

import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

function JobStatus1() {
    return (
            <div className='border w-full rounded-lg shadow-md p-4 bg-[#F9FAFB]'>
                <div className='flex justify-between items-center border-b pb-2'>
                    <h1 className='text-[#151433] font-semibold text-lg'>
                        Software Engineer
                    </h1>
                    <button className='flex items-center font-semibold gap-1 justify-center bg-white px-3 py-1 border border-[#DBDEE0] rounded-full transition duration-200 hover:bg-[#F1F1F1]'>
                        See Details <FaLongArrowAltRight />
                    </button>
                </div>
                <div className='flex flex-col sm:flex-row py-1 mt-2 items-center gap-4 text-center text-sm text-gray-600'>
                    <p>
                        Total Applications: <span className='font-medium text-black'>500</span>
                    </p>
                    <p>
                        Post Date: <span className='font-medium text-black'>11 Jan, 2024</span>
                    </p>
                    <p>
                        Close Date: <span className='font-medium text-black'>22 Feb, 2024</span>
                    </p>
                </div>

                <div className='flex item-center mt-4'>
                    {/* Progress Steps */}
                    {/* {['Planning', 'Sourcing...', 'Interviewing...', 'Hired', 'Onboarding'].map((step, index) => ( */}
                    {/* 1 */}
                    <div className='flex items-center justify-center mb-2'>
                        <div className='flex gap-1 justify-start flex-col '>
                            <div className='flex items-center text-gray-600'>
                                Planning
                                <svg
                                    className='w-4 h-4 ml-1 text-gray-400'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='12'
                                    height='12'
                                    viewBox='0 0 12 12'
                                    fill='none'>
                                    <path
                                        d='M6 11C8.75 11 11 8.75 11 6C11 3.25 8.75 1 6 1C3.25 1 1 3.25 1 6C1 8.75 3.25 11 6 11Z'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M6 4V6.5'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M5.99707 8H6.00156'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            </div>
                            <div className='flex items-center'>
                                {/* Circle Indicator */}
                                <div className={`w-4 h-4 rounded-full border-2 border-[#83B253] bg-[#83B253]`}></div>
                                {/* ' : 'border-gray-300 bg-white'} */}
                                {/* Line Progress */}
                                <div className={`flex-1 h-[2px] w-[110px] bg-[#83B253]`}></div>
                                {/* 'bg-gray-300'} */}
                            </div>
                        </div>
                    </div>
                    {/* 2 */}

                    <div className='flex items-center justify-center mb-2'>
                        <div className='flex gap-1 justify-start flex-col '>
                            <div className='flex items-center text-gray-600'>
                                Sourcing...
                                <svg
                                    className='w-4 h-4 ml-1 text-gray-400'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='12'
                                    height='12'
                                    viewBox='0 0 12 12'
                                    fill='none'>
                                    <path
                                        d='M6 11C8.75 11 11 8.75 11 6C11 3.25 8.75 1 6 1C3.25 1 1 3.25 1 6C1 8.75 3.25 11 6 11Z'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M6 4V6.5'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M5.99707 8H6.00156'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            </div>
                            <div className='flex items-center'>
                                {/* Circle Indicator */}
                                <div className={`w-4 h-4 rounded-full border-2 border-[#83B253] bg-[#83B253]`}></div>
                                {/* ' : 'border-gray-300 bg-white'} */}
                                {/* Line Progress */}
                                <div className={`flex-1 h-[2px] w-[110px] bg-[#83B253]`}></div>
                                {/* '} */}
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className='flex items-center justify-center mb-2'>
                        <div className='flex gap-1 justify-start flex-col '>
                            <div className='flex items-center text-gray-600'>
                                Interviewing...
                                <svg
                                    className='w-4 h-4 ml-1 text-gray-400'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='12'
                                    height='12'
                                    viewBox='0 0 12 12'
                                    fill='none'>
                                    <path
                                        d='M6 11C8.75 11 11 8.75 11 6C11 3.25 8.75 1 6 1C3.25 1 1 3.25 1 6C1 8.75 3.25 11 6 11Z'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M6 4V6.5'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M5.99707 8H6.00156'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            </div>
                            <div className='flex items-center'>
                                {/* Circle Indicator */}
                                <div className={`w-4 h-4 rounded-full border-2 border-[#83B253] bg-white`}></div>

                                {/* Line Progress */}
                                <div className={`flex-1 h-[2px] w-[110px] bg-gray-300`}></div>
                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className='flex items-center justify-center mb-2'>
                        <div className='flex gap-1 justify-start flex-col '>
                            <div className='flex items-center text-gray-600'>
                                Hired
                                <svg
                                    className='w-4 h-4 ml-1 text-gray-400'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='12'
                                    height='12'
                                    viewBox='0 0 12 12'
                                    fill='none'>
                                    <path
                                        d='M6 11C8.75 11 11 8.75 11 6C11 3.25 8.75 1 6 1C3.25 1 1 3.25 1 6C1 8.75 3.25 11 6 11Z'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M6 4V6.5'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M5.99707 8H6.00156'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            </div>
                            <div className='flex items-center'>
                                {/* Circle Indicator */}
                                <div className={`w-4 h-4 rounded-full border-2 border-gray-300 bg-white`}></div>

                                {/* Line Progress */}
                                <div className={`flex-1 h-[2px] w-[110px] bg-gray-300`}></div>
                            </div>
                        </div>
                    </div>
                    {/* 5 */}
                    <div className='flex items-center justify-center mb-2'>
                        <div className='flex gap-1 justify-start flex-col '>
                            <div className='flex items-center text-gray-600'>
                                Onboarding
                                <svg
                                    className='w-4 h-4 ml-1 text-gray-400'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='12'
                                    height='12'
                                    viewBox='0 0 12 12'
                                    fill='none'>
                                    <path
                                        d='M6 11C8.75 11 11 8.75 11 6C11 3.25 8.75 1 6 1C3.25 1 1 3.25 1 6C1 8.75 3.25 11 6 11Z'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M6 4V6.5'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                    <path
                                        d='M5.99707 8H6.00156'
                                        stroke='#7E819E'
                                        strokeWidth='1.2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            </div>
                            <div className='flex items-center'>
                                {/* Circle Indicator */}
                                <div className={`w-4 h-4 rounded-full border-2 border-gray-300 bg-white`}></div>

                                {/* Line Progress */}
                                <div className={`flex-1 h-[2px] w-[110px] bg-transparent`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default JobStatus1;
