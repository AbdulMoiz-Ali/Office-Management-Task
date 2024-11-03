import React from 'react'
import Cancel from '../../components/Cancel';
import { FaArrowRight } from "react-icons/fa6";
import Area from '../../components/TextArea';
import { Link } from 'react-router-dom';


const OrganizationDetails = () => {
  return (
    <div>
      <div >
        <Cancel />
      </div>

      <div className='text-center	overflow-hidden'>
        <div className='font-semibold	'>Organization Details</div>
        <p>Let’s fill out the basics information of the job</p>
      </div>
      <div className="flex justify-center mt-4 w-full lg:w-[30%] md:w-[50%] mx-auto">
        <div className="w-1/3 h-1 bg-[#6047F9] rounded-full"></div>
        <div className="w-1/3 h-1 bg-white rounded-full ml-2"></div>
        <div className="w-1/3 h-1 bg-white rounded-full ml-2"></div>
      </div>
      <div style={{ margin: '20px 20%' }}>
        <form >
          <label>Request ID</label>
          <input type="text" placeholder="ex. 345687" className="w-full px-4 py-2 border border-gray-300 rounded-[200px] focus:outline-none focus:border-blue-500" />
          <div className='mt-4'>

            <label>Submitted by</label>
            <select value="" className="w-full px-4 py-2 border border-gray-300 rounded-[200px] focus:outline-none focus:border-blue-500">
              <option name="male" isabled hidden selected> ex. Jhon Doe</option>
              <option name="female">others</option>
            </select>
          </div>

          <div className='mt-4'>
            <label>Recruiting manager</label>
            <select value="" className="w-full px-4 py-2 border border-gray-300 rounded-[200px] focus:outline-none focus:border-blue-500">
              <option name="male" isabled hidden selected > Select from dropdown</option>
              <option name="female">others</option>
            </select>
          </div>

          <div className='mt-4'>
            <label>Department</label>
            <select value="" className="w-full px-4 py-2 border border-gray-300 rounded-[200px] focus:outline-none focus:border-blue-500">
              <option name="male" isabled hidden selected className='text-inherit'> Select from dropdown</option>
              <option name="female">others</option>
            </select>
          </div>
          <div className='mt-4'>
            <label>Date</label>
            <input type="date" placeholder="ex. 345687" className="w-full px-4 py-2 border border-gray-300 rounded-[200px] focus:outline-none focus:border-blue-500" />
          </div>
          <div className='mt-4'>
            <label>No of vacancies</label>
            <input type="text" placeholder="ex. 345687" className=" w-full px-4 py-2 border border-gray-300 rounded-[200px] focus:outline-none focus:border-blue-500" />
          </div>
          <div className='mt-4'>
            <label>Reason for recruitment</label>
            <select value="" className="w-full px-4 py-2 border border-gray-300 rounded-[200px] focus:outline-none focus:border-blue-500">
              <option name="male" isabled hidden selected style={{color:"gray"}}> Select from dropdown</option>
              <option name="female">others</option>
            </select>
          </div>
          <div className='mt-4'>
            <label>Reports to</label>
            <select value="" className="w-full px-4 py-2 border border-gray-300 rounded-[200px] focus:outline-none focus:border-blue-500">
              <option name="male" isabled hidden selected className='text-inherit'> Select from dropdown</option>
              <option name="female">others</option>
            </select>
          </div>
          <div className='mt-4'>
            <label>Reports to</label>
            <Area/>

          </div>
        </form>

        <Link to="/jobdetails" className="w-full px-4 py-2 border border-gray-300 rounded-[200px] bg-[#6047F9] text-white mt-12 flex items-center justify-center" > NEXT<FaArrowRight className="ml-2"/> </Link>

      </div>
   

    </div>
  )
}

export default OrganizationDetails;
