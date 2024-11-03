import React from 'react'
import Card from '../../components/cards/overview'
import { IoIosArrowDown } from "react-icons/io";
import StatusButton from '../../components/button/StatusButton';
import { HiDotsHorizontal } from "react-icons/hi";
import Events from '../../components/cards/Events';
import Appliciant from "../../components/cards/Appliciant"
import Jobstatus from '../../components/cards/bar1';
import JobStatus1 from '../../components/cards/bar2';

const Overview = () => {
    return (
        <div >
            <div className='text-black'>Overview</div>
            {/* <div className='flex flex-wrap justify-between'> */}
            <div className='flex gap-4'>

                {/* <div> */}
                <Card title="Total Job Openings" image="../../../src/assets/brifecase-tick.png" />
                <Card title="Total Application" image="../../../src/assets/note-2-tick.png" />
                {/* </div> */}
                {/* <div>  */}
                <Card title="Inteviewing" image="../../../src/assets/headphone.png" />
                <Card title="Hired" image="../../../src/assets/tick-circle.png" />
                {/* </div> */}


            </div>

            <div className='flex flex-col justify-between gap-4 mt-4 lg:flex-row'>
                {/* col-1 */}
                <div className='lg:w-2/3 md:w-full'>
                    <div className="flex justify-between mt-4">
                        <div className="text-lg font-medium">Recruitment Requisitions</div>
                        <div className="items-center py-1 px-1">

                            <span>view all</span>
                        </div>
                    </div>

                    {/* table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full overflow-x-auto ">
                            <thead>
                                <tr className="text-slate-500 font-light">
                                    <th className="px-4 py-2 text-left">Job Title</th>
                                    <th className="px-4 py-2 text-left">
                                        <span className="flex items-center">
                                            Department
                                            <IoIosArrowDown className='ml-1' />
                                        </span>
                                    </th>
                                    <th className="px-4 py-2 text-left">
                                        <span className="flex items-center">
                                            Recruitment Manager
                                            <IoIosArrowDown className='ml-1' />
                                        </span>
                                    </th>
                                    <th className="px-4 py-2 text-left">
                                        <span className="flex items-center">
                                            Status
                                            <IoIosArrowDown className='ml-1' />
                                        </span>
                                    </th>
                                    <th className="px-2 py-2 text-left"></th>
                                </tr>
                            </thead>

                            <tbody >
                                <tr className="font-medium">
                                    <td className="px-4 py-2 ">Senior Product Designer</td>
                                    <td className="px-4 py-2">Design</td>
                                    <td className="px-4 py-2"><span className="flex items-center"><img src="../../../src/assets/women.png" className='w-6 h-6 mr-1  rounded-[100px]' alt="" /> Darrell </span></td>
                                    <td className="px-4 py-2"><StatusButton status="approved" width={120} /></td>
                                    <td className="px-4 py-2"><HiDotsHorizontal /></td>
                                </tr>

                                <tr className="font-medium">
                                    <td className="px-4 py-2 ">Software Engineer</td>
                                    <td className="px-4 py-2">Design</td>
                                    <td className="px-4 py-2"><span className="flex items-center"><img src="../../../src/assets/women.png" className='w-6 h-6 mr-1  rounded-[100px]' alt="" /> Darrell </span></td>
                                    <td className="px-4 py-2"><StatusButton status="pending" width={120} /></td>
                                    <td className="px-4 py-2"><HiDotsHorizontal /></td>
                                </tr>
                                <tr className="font-medium ">
                                    <td className="px-4 py-2 ">Senior Product Designer</td>
                                    <td className="px-4 py-2">Design</td>
                                    <td className="px-4 py-2"><span className="flex items-center"><img src="../../../src/assets/women.png" className='w-6 h-6 mr-1  rounded-[100px]' alt="" /> Darrell </span></td>
                                    <td className="px-4 py-2"><StatusButton status="approved" width={120} /></td>
                                    <td className="px-4 py-2"><HiDotsHorizontal /></td>
                                </tr>
                                <tr className="font-medium ">
                                    <td className="px-4 py-2 ">Senior Product Designer</td>
                                    <td className="px-4 py-2">Design</td>
                                    <td className="px-4 py-2"><span className="flex items-center"><img src="../../../src/assets/women.png" className='w-6 h-6 mr-1  rounded-[100px]' alt="" /> Darrell </span></td>
                                    <td className="px-4 py-2"><StatusButton status="approved" width={120} /></td>
                                    <td className="px-4 py-2"><HiDotsHorizontal /></td>
                                </tr>
                                <tr className="font-medium ">
                                    <td className="px-4 py-2 ">Senior Product Designer</td>
                                    <td className="px-4 py-2">Design</td>
                                    <td className="px-4 py-2"><span className="flex items-center"><img src="../../../src/assets/women.png" className='w-6 h-6 mr-1  rounded-[100px]' alt="" /> Darrell </span></td>
                                    <td className="px-4 py-2"><StatusButton status="approved" width={120} /></td>
                                    <td className="px-4 py-2"><HiDotsHorizontal /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="text-lg font-semibold mt-4 mb-4">Ongoing Recruisitions</div>
                    <div className="flex item-center flex-col gap-2"><Jobstatus />
                        <JobStatus1 /></div>


                </div>
                {/* col-2 */}

                <div className='w-1/3 md:w-full'>
                    <div className='text-black mt-4'>
                        <span className="text-lg font-medium">Today's Schedule</span>
                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-20 ms-3 text-sm font-medium text-white bg-purple-500 rounded-full">6</span>
                    </div>
                    <div className='flex flex-row justify-between gap-4 mt-4 lg:flex-col'>
                        {/* div 1.1 */}
                        <div className='flex-1'>
                            <div className='mt-3'> <Events /></div>
                            <div className='mt-3'> <Events /></div>
                            <div className='mt-3'> <Events /></div>
                            <div className="flex justify-between mt-4">
                            </div>
                            <div>

                            </div>


                        </div>
                        {/* div  2  .2  */}
                        <div className='flex-2'>
                            <div className="text-lg font-medium">Recently Hired</div>
                            <div className="items-center py-1 px-1">
                                <span>view all</span>
                            </div>
                            <div>
                                <Appliciant />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Overview