import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


const Plainning = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('');
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };
    const options = ["Male", "Female"]

    return (
        <div>

            {/* First Phase */}
            <div className="relative w-full">
                <div
                    onClick={toggleDropdown}
                    className="flex justify-between items-center px-4 py-2 border border-gray-300 rounded-[8px] cursor-pointer focus:outline-none"
                >
                    <span>
                        First Phase
                    </span>

                    <div className='text-gray-500'>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>

                </div>
                {isOpen && (
                    <ul className="absolute left-0 right-0 bg-white border border-gray-300 mt-1 rounded-[8px] z-10">
                        {options.map((option, index) => (
                            <li

                                key={index}
                                onClick={() => handleSelect(option)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Candidate assesments */}
            <div className="relative w-full mt-2">
                <div
                    onClick={toggleDropdown}
                    className="flex justify-between items-center px-4 py-2 border border-gray-300 rounded-[8px] cursor-pointer focus:outline-none"
                >
                    <span>
                        Candidate assesments
                        {/* {selected || placeholder} */}
                    </span>

                    <div className='text-gray-500'>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>

                </div>
                {isOpen && (
                    <ul className="absolute left-0 right-0 bg-white border border-gray-300 mt-1 rounded-[8px] z-10">
                        {options.map((option, index) => (
                            <li

                                key={index}
                                onClick={() => handleSelect(option)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {/* Budget */}
            <div className="relative w-full mt-2">
                <div
                    onClick={toggleDropdown}
                    className="flex justify-between items-center px-4 py-2 border border-gray-300 rounded-[8px] cursor-pointer focus:outline-none"
                >
                    <span>
                        Budget
                        {/* {selected || placeholder} */}
                    </span>

                    <div className='text-gray-500'>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>

                </div>
                {isOpen && (
                    <ul className="absolute left-0 right-0 bg-white border border-gray-300 mt-1 rounded-[8px] z-10">
                        {options.map((option, index) => (
                            <li

                                key={index}
                                onClick={() => handleSelect(option)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {/* Approval */}
            <div className="relative w-full mt-2">
                <div
                    onClick={toggleDropdown}
                    className="flex justify-between items-center px-4 py-2 border border-gray-300 rounded-[8px] cursor-pointer focus:outline-none"
                >
                    <span>
                        Approvals
                        {/* {selected || placeholder} */}
                    </span>

                    <div className='text-gray-500'>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>

                </div>
                {isOpen && (
                    <ul className="absolute left-0 right-0 bg-white border border-gray-300 mt-1 rounded-[8px] z-10">
                        {options.map((option, index) => (
                            <li

                                key={index}
                                onClick={() => handleSelect(option)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Plainning
