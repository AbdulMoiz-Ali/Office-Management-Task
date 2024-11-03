/** @format */

import React from 'react';

const SuccessionStages = ({ width, height, label }) => {
	return (
		<>
			{label == 'none' && (
				<div className={`flex items-center gap-1 p-2 w-auto`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'>
						<path
							d='M3.43359 1.33301V14.6663'
							stroke='#545670'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M3.43359 2.66699H10.9003C12.7003 2.66699 13.1003 3.66699 11.8336 4.93366L11.0336 5.73366C10.5003 6.26699 10.5003 7.13366 11.0336 7.60033L11.8336 8.40033C13.1003 9.66699 12.6336 10.667 10.9003 10.667H3.43359'
							stroke='#545670'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					<span className={`text-lg font-medium text-[#545670]`}>None</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'>
						<path
							d='M3.43359 1.33301V14.6663'
							stroke='#545670'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M3.43359 2.66699H10.9003C12.7003 2.66699 13.1003 3.66699 11.8336 4.93366L11.0336 5.73366C10.5003 6.26699 10.5003 7.13366 11.0336 7.60033L11.8336 8.40033C13.1003 9.66699 12.6336 10.667 10.9003 10.667H3.43359'
							stroke='#545670'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</div>
			)}

			{label == 'Under Review' && (
				<div className={`flex items-center gap-1 p-2 w-auto`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'>
						<path
							d='M3.43359 1.33301V14.6663'
							stroke='#FFBD12'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M3.43359 2.66699H10.9003C12.7003 2.66699 13.1003 3.66699 11.8336 4.93366L11.0336 5.73366C10.5003 6.26699 10.5003 7.13366 11.0336 7.60033L11.8336 8.40033C13.1003 9.66699 12.6336 10.667 10.9003 10.667H3.43359'
							stroke='#FFBD12'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					<span className={`text-lg font-medium text-[#FFBD12]`}>
						Under Review
					</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'>
						<path
							d='M3.43359 1.33301V14.6663'
							stroke='#545670'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M3.43359 2.66699H10.9003C12.7003 2.66699 13.1003 3.66699 11.8336 4.93366L11.0336 5.73366C10.5003 6.26699 10.5003 7.13366 11.0336 7.60033L11.8336 8.40033C13.1003 9.66699 12.6336 10.667 10.9003 10.667H3.43359'
							stroke='#545670'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</div>
			)}

			{label == 'Planning' && (
				<div className={`flex items-center gap-1 p-2 w-auto`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'>
						<path
							d='M3.43359 1.33301V14.6663'
							stroke='#2D78E6'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M3.43359 2.66699H10.9003C12.7003 2.66699 13.1003 3.66699 11.8336 4.93366L11.0336 5.73366C10.5003 6.26699 10.5003 7.13366 11.0336 7.60033L11.8336 8.40033C13.1003 9.66699 12.6336 10.667 10.9003 10.667H3.43359'
							stroke='#2D78E6'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					<span className={`text-lg font-medium text-[#2D78E6]`}>Planning</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'>
						<path
							d='M3.43359 1.33301V14.6663'
							stroke='#545670'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M3.43359 2.66699H10.9003C12.7003 2.66699 13.1003 3.66699 11.8336 4.93366L11.0336 5.73366C10.5003 6.26699 10.5003 7.13366 11.0336 7.60033L11.8336 8.40033C13.1003 9.66699 12.6336 10.667 10.9003 10.667H3.43359'
							stroke='#545670'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</div>
			)}

			{label == 'Confirmed' && (
				<div className={`flex items-center gap-1 p-2 w-auto`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'>
						<path
							d='M3.43359 1.33301V14.6663'
							stroke='#128635'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M3.43359 2.66699H10.9003C12.7003 2.66699 13.1003 3.66699 11.8336 4.93366L11.0336 5.73366C10.5003 6.26699 10.5003 7.13366 11.0336 7.60033L11.8336 8.40033C13.1003 9.66699 12.6336 10.667 10.9003 10.667H3.43359'
							stroke='#128635'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					<span className={`text-lg font-medium text-[#128635]`}>
						Confirmed
					</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'>
						<path
							d='M3.43359 1.33301V14.6663'
							stroke='#545670'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M3.43359 2.66699H10.9003C12.7003 2.66699 13.1003 3.66699 11.8336 4.93366L11.0336 5.73366C10.5003 6.26699 10.5003 7.13366 11.0336 7.60033L11.8336 8.40033C13.1003 9.66699 12.6336 10.667 10.9003 10.667H3.43359'
							stroke='#545670'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</div>
			)}

			{label == 'Product Design' && (
				<div
					className={`flex items-center gap-1 p-2 border rounded-full text-black`}
					style={{
						width: width,
						height: height,
					}}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'>
						<path
							d='M9.62012 3.95312L13.6668 7.99979L9.62012 12.0465'
							stroke='#545670'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M2.33301 8H13.553'
							stroke='#545670'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					<span className={`text-lg font-medium text-black`}>
						Product Design
					</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'>
						<path
							d='M9.62012 3.95312L13.6668 7.99979L9.62012 12.0465'
							stroke='#545670'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M2.33301 8H13.553'
							stroke='#545670'
							stroke-width='1.5'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</div>
			)}
		</>
	);
};

export default SuccessionStages;
