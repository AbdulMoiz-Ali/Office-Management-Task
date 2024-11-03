/** @format */

import React from 'react';
import { BsDot } from "react-icons/bs";

function Event() {
	return (
		<div className='border-2 border-blue-100 rounded-[8px] p-2  '>
			<div className='flex items-center font-medium text-md'>
				<BsDot/>
				First call with Jannat
			</div>
			<div className='text-slate-400 text-[12px]'>
				20 Nov, Thursday at 2:00 PM - 3:00PM EST
			</div>
			<div>

			<div className="flex justify-between  mt-4">
					<div className="text-lg font-semibold flex -space-x-2">
						<img src="../../../src/assets/image-1.png" className='w-6 h-6 mr-1  rounded-[100px]' alt="" />
						<img src="../../../src/assets/image-2.png" className='w-6 h-6 mr-1  rounded-[100px]' alt="" />
						<img src="../../../src/assets/profile-add.png" className='w-6 h-6 mr-1  rounded-[100px]' alt="" />

					</div>
					<div className="flex items-center gap-2 border-2 border-gray-100 rounded-full py-1 px-1 w-[7rem] h-10">

						<img src='../../src/assets/logos_google-meet.png' alt="" />
						<span>Join Now</span>
					</div>
				</div>
			</div>
		</div>


	)
}

export default Event;
