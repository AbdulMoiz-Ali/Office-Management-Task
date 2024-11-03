/** @format */

import React from 'react';

const StepProgressBar = ({ currentStep, text }) => {
    // Define step labels and styles for each step
    const steps = [
        {
            lineStyle: 'bg-[#F2F2F2]',
            border: 'border-[#F2F2F2] bg-white',
        },
        {
            lineStyle: 'bg-[#F2F2F2]',
            border: 'border-[#83B253] bg-white',
        },
        {
            lineStyle: 'bg-[#83B253]',
            border: 'border-[#83B253] bg-[#83B253]',
        },
    ];

    return (
        <div className='flex flex-col space-y-4'>
            {steps.map((step, index) => (
                
                <div key={index} className='flex gap-1 flex-col'>
                    {/* Step Label (Only show if it matches currentStep) */}
                    <div
                        className={`flex items-center ${index + 1 === currentStep ? 'text-gray-600' : 'hidden'
                            }`}>
                        {text}
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
                                stroke-width='1.2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            />
                            <path
                                d='M6 4V6.5'
                                stroke='#7E819E'
                                stroke-width='1.2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            />
                            <path
                                d='M5.99707 8H6.00156'
                                stroke='#7E819E'
                                stroke-width='1.2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            />
                        </svg>
                    </div>
                    <div className='flex items-center'>
                        {/* Circle Indicator */}
                        <div
                            className={`w-4 h-4 rounded-full border-2 ${index + 1 === currentStep ? step.border : 'hidden'
                                }`}></div>

                        {/* Line Progress (Only render if it matches currentStep) */}
                        <div
                            className={`flex w-[257px] h-[2px] ${index + 1 === currentStep ? step.lineStyle : 'bg-gray-300'
                                }`}
                            style={{
                                display: index + 1 === currentStep ? 'block' : 'none',
                            }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StepProgressBar;
