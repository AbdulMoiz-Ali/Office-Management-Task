import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowDown } from 'react-icons/io';
import { FaPlus } from "react-icons/fa6";
import Stage from '../../components/Stages/Stage';
import Plaining from '../../components/Stages/Plaining';

const HiringProcess = () => {


    return (
        <div>

            <div className='flex gap-2 items-center  '>
                <span className='bg-gray-200 p-1.5 rounded-[8px] cursor-pointer' ><FaArrowLeftLong className='text-gray-500' /></span>

                <span className='text-gray-500 cursor-pointer'>Back</span>
            </div>

            <div>
                <div className="flex my-4 gap-2 items-center text-sm">
                    <div className=" font-medium">Select Position:</div>
                    <div
                        className="flex items-center gap-2 border-2 border-gray-100 rounded-full py-1 px-2 h-10 cursor-pointer" >
                        {/* <span>Cancel</span> */}
                        <span className="flex items-center">
                            Senior Product Designer
                            <IoIosArrowDown className='ml-1' />
                        </span>

                    </div>
                </div>
            </div>

            {/*                    Tabs View                    */}



            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-500 ">
                <ul class="flex flex-wrap -mb-px">
                    <li class="me-2">
                        <a href="#" class="inline-block p-4 border-b-2 border-[#6047F9] text-[#6047F9] rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:[#6047F9]" aria-current="page">Stages</a>
                    </li>
                    <li class="me-2">
                        <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" >Interview Guide</a>
                    </li>
                    <li class="me-2">
                        <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Generate Offer</a>
                    </li>

                </ul>
            </div>

            {/* Hiring Stages Button */}

            <div className="flex justify-between p-4">
                <div className="text-lg font-semibold">Hiring Stages</div>
                <div
                    className="flex items-center gap-2 border-2 text-white border-[#293773] bg-[#293773] rounded-full py-1 px-3 h-10 cursor-pointer">
                    <FaPlus />
                    <span className=''>New Stage</span>
                </div>
            </div>

            <div >
                <Stage placeholder="Planning" phase={<Plaining />} />
            </div>
            <div className='mt-5'>
                <Stage placeholder="Sourcing & screening" phase={<Plaining />} />

            </div>
            <div className='mt-5'>
                <Stage placeholder="Interviewing & Selection" />
            </div>
            <div className='mt-5' >
                <Stage placeholder="Hired" />
            </div>
            <div className='mt-5' >
                <Stage placeholder="Onboarding" />
            </div>

        </div>
    )
}

export default HiringProcess
