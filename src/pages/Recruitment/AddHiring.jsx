import React, { useState } from 'react'
import Vector from "../../assets/Vector.svg";
import { FaXmark, FaAngleDown } from "react-icons/fa6";
import { FiArrowRight } from 'react-icons/fi';

const AddHiring = () => {
    const [tryNewProcess, setTryNewProcess] = useState(false);
    const [toggleJobSelect, setToggleJobSelect] = useState(false);
    const [toggleDepartmentSelect, setToggleDepartmentSelect] = useState(false);

    const userdata = [
        {
            position: "Senior Product Designer",
            department: "Design",
            createby: "Darrell",
            imageby: "./src/assets/Image-1.png",
            createon: "20 Oct, 2024",
            seedetail: ""
        },
        {
            position: "Senior Engineer",
            department: "Engineering",
            createby: "Jannat",
            imageby: "./src/assets/Avatar.png",
            createon: "20 Oct, 2024",
            seedetail: ""
        },
        {
            position: "Webflow Developer",
            department: "Development",
            createby: "Julias",
            imageby: "./src/assets/Avatar hiring.png",
            createon: "20 Oct, 2024",
            seedetail: ""
        },
    ];

    return (
        <>
            <article>
                <div className='flex px-4 py-3 justify-between items-center border-b-[1px] border-b-gray-50'>
                    <h3 className='text-[#535369] text-[17px] font-[Inter] font-[500]'>Hiring Process</h3>
                    <button className='bg-[#6047F7] text-[14px] text-[#fbfbfb] font-[Inter] font-[500] px-[15px] py-[5px] rounded-[80px]' onClick={() => setTryNewProcess(true)}>
                        <span className='text-[18px] pr-1'>+</span>
                        New Process
                    </button>
                </div>

                {userdata.length === 0 ? (
                    <div className='flex flex-col w-[100%] h-[70vh] justify-center items-center'>
                        <img src={Vector} alt="icon" />
                        <div className='flex flex-col justify-center items-center mt-5'>
                            <h3 className='text-[#535369] text-[19px] font-[Inter] font-[500]'>No Hiring Process Yet</h3>
                            <p className='text-[16px] text-[#a8a8a8] font-[400] font-[Inter]'>Start building your first hiring process to find the perfect candidate.</p>
                            <button className='bg-[#6047F7] mt-2 text-[14px] text-[#fbfbfb] font-[Inter] font-[500] px-[15px] py-[5px] rounded-[80px]' onClick={() => setTryNewProcess(true)}>
                                <span className='text-[18px] pr-1'>+</span>
                                New Process
                            </button>
                        </div>
                    </div>
                ) : (
                    <article className='border-2 border-[#EFEFF1] rounded-lg'>
                        <div className="flex items-center bg-[#F2F2F2] h-[40px]">
                            <p className='pl-2 w-[25%] text-[#545670] text-sm md:text-base'>Position</p>
                            <p className='pl-2 w-[20%] text-[#545670] text-sm md:text-base'>Department</p>
                            <p className='pl-2 w-[20%] text-[#545670] text-sm md:text-base'>Created by</p>
                            <p className='pl-2 w-[20%] text-[#545670] text-sm md:text-base'>Created on</p>
                            <p className='pl-2 w-[20%] text-sm md:text-base'></p>
                        </div>
                        {userdata.map((item, index) => (
                            <div className="flex border items-center h-[56px]" key={index}>
                                <p className='pl-2 w-[25%] font-semibold text-[#151433] text-sm md:text-base'>{item.position}</p>
                                <p className='pl-2 w-[20%] font-medium text-[#545670] text-sm md:text-base'>{item.department}</p>
                                <div className='flex items-center gap-1 pl-2 w-[20%]'>
                                    {item.imageby && (
                                        <img className='rounded-full w-[24px] h-[24px]' src={item.imageby} alt="Profile" />
                                    )}
                                    <p className='font-semibold text-[#151433] text-sm md:text-base'>{item.createby}</p>
                                </div>
                                <p className='pl-2 w-[20%] font-medium text-[#545670] text-sm md:text-base'>{item.createon}</p>
                                <div className='flex justify-end mr-2 w-[20%]'>
                                    <button onClick={item.seedetail} className='flex justify-center items-center bg-[#fff] text-[14px] font-semibold text-[#151433] w-[120px] px-2 py-1 border-[#DBDEE0] rounded-full border'>
                                        <span>See details</span>
                                        <span className='text-center text-[18px] pl-1 pt-[2px]'>
                                            <FiArrowRight />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </article>
                )}
            </article>

            {tryNewProcess && (
                <article className='absolute h-[100vh] w-[100vw] flex items-center justify-center bg-black bg-opacity-30 top-0 left-0 z-50'>
                    {/* Modal  */}
                    <div className='bg-[#fff] w-[600px] h-[320px] rounded-md'>
                        {/* Modal Header  */}
                        <div className='flex justify-between items-center px-4 py-3 border-b-[1px] border-b-gray-30'>
                            <h5 className='font-[Inter] font-[400] text-[#353535]'>Create new Hiring Process</h5>
                            <button onClick={() => setTryNewProcess(false)}>
                                <FaXmark color="#a8a8a8" size={23} />
                            </button>
                        </div>
                        <div className='flex flex-col gap-4 px-4 py-6 border-b-[1px] border-b-gray-30'>
                            {/* Job titles */}
                            <div className='flex flex-col gap-[1px] relative'>
                                <div className='flex flex-col gap-[5px]'>
                                    <p className='text-[#535369] font-[Inter] text-[14px]'>Job titles</p>
                                    <div className='border-[1px] border-[#d7d7d7] flex justify-between items-center rounded-[60px] px-4 py-2' onClick={() => setToggleJobSelect(true)}>
                                        <p className='text-[14px] text-[#a8a8a8] font-[Inter]'>Select from dropdown</p>
                                        <span onClick={(e) => {
                                            e.stopPropagation();
                                            setToggleJobSelect(prev => !prev);
                                        }}>
                                            <FaAngleDown color='#a8a8a8' size={20} style={{
                                                transform: toggleJobSelect ? "rotate(180deg)" : "",
                                                transition: "transform 0.2s ease-in"
                                            }} />
                                        </span>
                                    </div>
                                    {/* Job title select menu */}
                                    {toggleJobSelect && (
                                        <div className='w-[100%] absolute top-20 bg-[#fff] p-10 rounded-md' style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}>
                                            {/* Options here */}
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Department */}
                            <div className='flex flex-col gap-[1px] relative'>
                                <div className='flex flex-col gap-[5px]'>
                                    <p className='text-[#535369] font-[Inter] text-[14px]'>Department</p>
                                    <div className='border-[1px] border-[#d7d7d7] flex justify-between items-center rounded-[60px] px-4 py-2'>
                                        <p className='text-[14px] text-[#a8a8a8] font-[Inter]'>Select from dropdown</p>
                                        <span onClick={(e) => {
                                            e.stopPropagation();
                                            setToggleDepartmentSelect(prev => !prev);
                                        }}>
                                            <FaAngleDown color='#a8a8a8' size={20} style={{
                                                transform: toggleDepartmentSelect ? "rotate(180deg)" : "",
                                                transition: "transform 0.2s ease-in"
                                            }} />
                                        </span>
                                    </div>
                                    {/* Department select menu */}
                                    {toggleDepartmentSelect && (
                                        <div className='w-[100%] absolute top-20 bg-[#fff] p-10 rounded-md' style={{
                                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                                        }}>
                                            {/* Options here */}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Modal Footer  */}
                        <div className='flex justify-end py-4 px-4'>
                            <button onClick={() => setTryNewProcess(false)} className='bg-[#fff] text-[#5c5c5c] border-[1px] border-[#dbdee0] rounded-[80px] w-[100px] py-2 mr-2'>Cancel</button>
                            <button className='bg-[#6047F7] text-[#fff] rounded-[80px] w-[100px] py-2'>Save</button>
                        </div>
                    </div>
                </article>
            )}
        </>
    )
}

export default AddHiring;
