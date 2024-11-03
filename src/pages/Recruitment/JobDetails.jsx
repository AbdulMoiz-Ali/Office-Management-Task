import React,{useState} from 'react'
import Cancel from '../../components/Cancel';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import TextArea from '../../components/TextArea';
import { HiPlus } from "react-icons/hi";
import { Link } from 'react-router-dom';


const OrganizationDetails = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <div >
        <Cancel />
      </div>

      <div className='text-center'>
        <div className='font-semibold'>Job Details</div>
        <p>Let’s fill out the basics information of the job</p>
      </div>
      <div className="flex justify-center mt-4 w-full lg:w-[30%] md:w-[50%] mx-auto">
        <div className="w-1/3 h-1 bg-[#6047F9] rounded-full"></div>
        <div className="w-1/3 h-1 bg-[#6047F9] rounded-full ml-2"></div>
        <div className="w-1/3 h-1 bg-white rounded-full ml-2"></div>
      </div>
      <div style={{ margin: '20px 20%' }}>
        <form >
          <label>Job titles</label>
            <select value="" className="w-full px-4 py-2 border border-gray-300 rounded-[200px] focus:outline-none focus:border-blue-500">
              <option name="male" isabled hidden selected className='text-inherit'> Select from dropdown</option>
              <option name="female">Female</option>
            </select>
          
                    <div className='mt-4'>

            <label>Employment type</label>
            <select value="" className="w-full px-4 py-2 border border-gray-300 rounded-[200px] focus:outline-none focus:border-blue-500">
              <option name="male" isabled hidden selected> ex. Jhon Doe</option>
              <option name="female">Female</option>
            </select>
          </div>

          <div className='mt-4'>
            <label>Experience</label>
            <select value="" className="w-full px-4 py-2 border border-gray-300 rounded-[200px] focus:outline-none focus:border-blue-500">
              <option name="male" isabled hidden selected > Select from dropdown</option>
              <option name="female">Female</option>
            </select>
          </div>

          <div className='mt-4'>
            <label>Justification</label>
          <TextArea/>
          </div>
          <div className='mt-4'>
            <label>Responsibilities</label>
            <TextArea/>
          </div>

           <div className='mt-4'>
            <label>Skills</label>
            <button className='px-4 py-2 border border-gray-300 rounded-[200px] bg-[#D0D0D0] flex items-center justify-center'> <HiPlus className='mr-2'/> Add Skill</button>
          </div>

          
          <div className='mt-4'>
            <label>Education</label>
            <select value="" className="w-full px-4 py-2 border border-gray-300 rounded-[200px] focus:outline-none focus:border-blue-500">
              <option name="male" isabled hidden selected > Select from dropdown</option>
              <option name="female">Female</option>
            </select>
          </div>

          <div className='mt-4'>
            <label>Work Experiece</label>
            <TextArea/>
          </div>
          <div className='mt-4'>
            <label>Skills & Qualifications</label>
            <TextArea/>
          </div>
         
        </form>
        <div className='mt-12 flex justify-between'>
            <Link to="/" className={`px-4 py-2 border border-gray-300 rounded-[200px] flex items-center justify-center transition-colors duration-300 
        ${isClicked ? 'bg-green-500 text-white' : 'bg-[#6047F9] text-white'}`} > <IoIosArrowBack className='mr-2'/> Back</Link>
            <Link to="/otherinformation" className='px-4 py-2 border border-gray-300 text-white rounded-[200px] bg-[#6047F9] flex items-center justify-center'>  Next <IoIosArrowForward className='ml-2'/></Link>

          </div>

      </div>
   

    </div>
  )
}

export default OrganizationDetails;
