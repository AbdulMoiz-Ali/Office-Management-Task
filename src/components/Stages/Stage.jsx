import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { RxDragHandleDots2 } from "react-icons/rx";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoFilterOutline } from "react-icons/io5";

function CustomSelect(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const phase = props.phase
    console.log(phase)
    const placeholder = props.placeholder;

    return (
        <div>
            <div className='flex w-full justify-between gap-2  '>
                <span className='mt-4'>
                    <RxDragHandleDots2 className='text-gray-500' />
                </span>
                <span className='w-full '>
                    {/* select */}
                    <div className="relative w-full">
                        <div
                            onClick={toggleDropdown}
                            className="flex justify-between items-center px-4 py-2 border border-gray-300 rounded-[8px] cursor-pointer focus:outline-none"
                        >
                            <div className='flex gap-3 items-center'>

                                <IoFilterOutline />

                                <span>
                                    {placeholder}
                                </span>
                            </div>

                            <div className='text-gray-500'>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>

                        </div>
                        {isOpen && (
                            <ul>
                                <li
                                    onClick={() => handleSelect(phase)} // Pass the single phase
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {phase}
                                </li>
                            </ul>

                        )}
                    </div>
                </span>
                <span className='mt-4'>
                    <RiDeleteBin5Line className='text-gray-500 ' />
                </span>
            </div>
        </div>

    );
}

export default CustomSelect;
