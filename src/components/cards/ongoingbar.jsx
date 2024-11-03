/** @format */
import React, { useEffect, useState } from 'react';

function Ongoingbar({ status }) {
    const [Activebar, setActivebar] = useState(null);
    const [Ongoing, setOngoing] = useState(null);
    const [Paused, setPaused] = useState(null);
    const [Hired, setHired] = useState(null);
    const [Onboarding, setOnboarding] = useState(null);
    const [Closed, setClosed] = useState(null);
    const [hide, sethide] = useState(null);
    useEffect(() => {
        setActivebar(status);
        console.log(status)

        // Update based on status
        if (status === 'Ongoing') {
            setOngoing(true);
        } else if (status === 'Paused') {
            setPaused(true);
        } else if (status === 'Hired') {
            setHired(true);
        } else if (status === 'Onboarding') {
            setOnboarding(true);
        } else if (status === 'Closed') {
            setClosed(true);
        } else {
            sethide(true);
        }
    }, [status]);
    return (
        <div className={`w-full ${hide ? "hidden" : "flex"} items-center mt-4`}>
            {/* Progress Steps */}
            {/* 1 */}
            <div className='flex items-center justify-center mb-2'>
                <div className='flex gap-1 justify-start flex-col'>
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
                        <div className={`w-4 h-4 rounded-full border-2 ${Ongoing || Paused || Hired || Onboarding || Closed ? "border-[#83B253] bg-[#83B253]" : "border-gray-300 bg-white"}`}></div>
                        <div className={`flex h-[2px] w-[180px] ${Ongoing || "Paused" || Hired || Onboarding || Closed ? "bg-[#83B253]" : "bg-gray-300"}`}></div>
                    </div>
                </div>
            </div>

            {/* 2 */}
            <div className='flex items-center justify-center mb-2'>
                <div className='flex gap-1 justify-start flex-col'>
                    <div className='flex items-center text-gray-600'>
                        Sourcing & Screening
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
                        <div className={`w-4 h-4 rounded-full border-2 ${Hired || Ongoing || Onboarding || Closed ? "border-[#83B253]" : ""} ${Hired || Onboarding || Closed ? "bg-[#83B253]" : "bg-white"}`}></div>
                        <div className={`flex h-[2px] w-[180px] ${Hired || Onboarding || Closed ? "bg-[#83B253]" : "bg-gray-300"}`}></div>
                    </div>
                </div>
            </div>

            {/* 3 */}
            <div className='flex items-center justify-center mb-2'>
                <div className='flex gap-1 justify-start flex-col'>
                    <div className='flex items-center text-gray-600'>
                        Interviewing & Selection
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
                        <div className={`w-4 h-4 rounded-full border-2 ${Hired || Onboarding || Closed ? "border-[#83B253] bg-[#83B253]" : "border-gray-300 bg-white"}`}></div>
                        <div className={`flex h-[2px] w-[180px] ${Hired || Onboarding || Closed ? "bg-[#83B253]" : "bg-gray-300"}`}></div>
                    </div>
                </div>
            </div>

            {/* 4 */}
            <div className='flex items-center justify-center mb-2'>
                <div className='flex gap-1 justify-start flex-col'>
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
                        <div className={`w-4 h-4 rounded-full border-2 ${Hired || Onboarding || Closed ? "border-[#83B253]" : ""}  ${Onboarding || Closed ? "bg-[#83B253]" : "bg-white"}`}></div>
                        <div className={`flex h-[2px] w-[180px] ${Onboarding || Closed ? "bg-[#83B253]" : "bg-gray-300"}`}></div>
                    </div>
                </div>
            </div>

            {/* 5 */}
            <div className='flex items-center justify-center mb-2'>
                <div className='flex gap-1 justify-start flex-col'>
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
                        <div className={`w-4 h-4 rounded-full border-2 ${Onboarding || Closed ? "border-[#83B253]" : ""} ${Closed ? "bg-[#83B253]" : "bg-white"}`}></div>
                        <div className={`flex h-[2px] w-[180px] `}></div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Ongoingbar;