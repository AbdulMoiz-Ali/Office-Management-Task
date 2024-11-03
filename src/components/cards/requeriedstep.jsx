/** @format */

import React from 'react';

const RecruitmentSteps = ({ show }) => {
	return (
		<>
			{show === 1 && (
				<div className='flex shadow-md rounded-lg gap-1 p-1 justify-around flex-col w-[18rem] items-center'>
					<div className='w-5 h-5 rounded-full border-2 border-[#F2F2F2] border-solid'></div>
					<h3 style={{ margin: 0 }}>Organization Info</h3>
					<p className='text-[#555]'>Please provide some basic information</p>
				</div>
			)}
			{show === 2 && (
				<div className='flex shadow-md rounded-lg gap-1 p-1 justify-around flex-col w-[18rem] items-center'>
					<div className='w-5 h-5 rounded-full border-2 border-[#83B253] border-solid'></div>
					<h3 style={{ margin: 0 }}>Organization Info</h3>
					<p className='text-[#555]'>Please provide some basic information</p>
				</div>
			)}
			{show === 3 && (
				<div className='flex shadow-md rounded-lg gap-1 p-1 justify-around flex-col w-[18rem] items-center'>
					<div className='w-5 h-5 rounded-full bg-[#83B253]'></div>
					<h3 style={{ margin: 0 }}>Organization Info</h3>
					<p className='text-[#555]'>Please provide some basic information</p>
				</div>
			)}
		</>
	);
};

export default RecruitmentSteps;
