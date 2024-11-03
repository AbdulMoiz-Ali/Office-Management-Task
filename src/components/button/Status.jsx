/** @format */

import React from 'react';

function Status({ status }) {
	return (
		<>
			{status === 'Ongoing' && (
				<button
					className={`w-auto text-[#864570] flex gap-1 items-center bg-[#408BFA14] justify-center px-4 py-2  border border-[#CCE1FF] rounded-full`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'>
						<path
							d='M7.275 10.835C9.42 10.27 11 8.32 11 6C11 3.24 8.78 1 6 1C2.665 1 1 3.78 1 3.78M1 3.78V1.5M1 3.78H2.005H3.22'
							stroke='#864570'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M1 6C1 8.76 3.24 11 6 11'
							stroke='#864570'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-dasharray='2 2'
						/>
					</svg>
					Ongoing
				</button>
			)}

			{status === 'Paused' && (
				<button
					className={`w-auto text-[#545670] flex gap-1 items-center bg-[#FBFBFB] justify-center px-4 py-2  border border-[#DBDEE0] rounded-full`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'>
						<path
							d='M4.65 10.5H7.35C9.6 10.5 10.5 9.6 10.5 7.35V4.65C10.5 2.4 9.6 1.5 7.35 1.5H4.65C2.4 1.5 1.5 2.4 1.5 4.65V7.35C1.5 9.6 2.4 10.5 4.65 10.5Z'
							stroke='#7E819E'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					Paused
				</button>
			)}

			{status === 'Publish' && (
				<button
					className={`w-auto text-[#026AA2] flex gap-1 items-center bg-[#F0F9FF] justify-center px-4 py-2  border border-[#B9E6FE] rounded-full`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'>
						<path
							d='M9.03484 4.785L5.99984 1.75L2.96484 4.785'
							stroke='#026AA2'
							stroke-width='1.2'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M6 10.25V1.83496'
							stroke='#026AA2'
							stroke-width='1.2'
							stroke-miterlimit='10'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					Publish
				</button>
			)}

			{status === 'Review' && (
				<button
					className={`w-auto text-[#EF6820] flex gap-1 items-center bg-[#FFF5F0] justify-center px-4 py-2  border border-[#FFDECC] rounded-full`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'>
						<path
							d='M6 11C8.75 11 11 8.75 11 6C11 3.25 8.75 1 6 1C3.25 1 1 3.25 1 6C1 8.75 3.25 11 6 11Z'
							stroke='#EF6820'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M7.99725 6H8.00174'
							stroke='#EF6820'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M5.99725 6H6.00174'
							stroke='#EF6820'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M3.99725 6H4.00174'
							stroke='#EF6820'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					In Review
				</button>
			)}

			{status === 'Denied' && (
				<button
					className={`w-auto text-[#DC3545] flex gap-1 items-center bg-[#FFF2F3] justify-center px-4 py-2  border border-[#FFCCD1] rounded-full`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'>
						<path
							d='M2.50195 9.49927L9.50123 2.49999'
							stroke='#DC3545'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M9.50123 9.49976L2.50195 2.50049'
							stroke='#DC3545'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					Denied
				</button>
			)}

			{status === 'Hired' && (
				<button
					className={`w-auto text-[#28A745] flex gap-1 items-center bg-[#ECFDF3] justify-center px-4 py-2  border border-[#B6DECFDF] rounded-full`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'>
						<path
							d='M6.0793 5.435C6.0293 5.43 5.9693 5.43 5.9143 5.435C4.7243 5.395 3.7793 4.42 3.7793 3.22C3.7793 1.995 4.7693 1 5.9993 1C7.2243 1 8.2193 1.995 8.2193 3.22C8.2143 4.42 7.2693 5.395 6.0793 5.435Z'
							stroke='#28A745'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M3.57938 7.28C2.36937 8.09 2.36937 9.41 3.57938 10.215C4.95438 11.135 7.20938 11.135 8.58438 10.215C9.79438 9.405 9.79438 8.085 8.58438 7.28C7.21438 6.365 4.95938 6.365 3.57938 7.28Z'
							stroke='#28A745'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					Hired
				</button>
			)}

			{status === 'Onboarding' && (
				<button
					className={`w-auto text-[#293773] flex gap-1 items-center bg-[#F4F6F9] justify-center px-4 py-2  border border-[#E4E0F9] rounded-full`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'>
						<path
							d='M11 5V7.5C11 10 10 11 7.5 11H4.5C2 11 1 10 1 7.5V4.5C1 2 2 1 4.5 1H7'
							stroke='#293773'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M11 5H9C7.5 5 7 4.5 7 3V1L11 5Z'
							stroke='#293773'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M3.5 6.5H6.5'
							stroke='#293773'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M3.5 8.5H5.5'
							stroke='#293773'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					Onboarding
				</button>
			)}

			{status === 'Closed' && (
				<button
					className={`w-auto text-[#155724] flex gap-1 items-center bg-[#E9FFEE] justify-center px-4 py-2  border border-[#99BFA2] rounded-full`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'>
						<path
							d='M6 11C8.75 11 11 8.75 11 6C11 3.25 8.75 1 6 1C3.25 1 1 3.25 1 6C1 8.75 3.25 11 6 11Z'
							stroke='#155724'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M3.875 5.99996L5.29 7.41496L8.125 4.58496'
							stroke='#155724'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					Closed
				</button>
			)}

			{status === 'Cancelled' && (
				<button
					className={`w-auto text-[#545670] flex gap-1 items-center bg-[#F2F2F2] justify-center px-4 py-2  border border-[#DBDEE0] rounded-full`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='12'
						viewBox='0 0 12 12'
						fill='none'>
						<path
							d='M10.5 2.98999C8.835 2.82499 7.16 2.73999 5.49 2.73999C4.5 2.73999 3.51 2.78999 2.52 2.88999L1.5 2.98999'
							stroke='#7E819E'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M4.25 2.485L4.36 1.83C4.44 1.355 4.5 1 5.345 1H6.655C7.5 1 7.565 1.375 7.64 1.835L7.75 2.485'
							stroke='#7E819E'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M9.42422 4.57007L9.09922 9.60507C9.04422 10.3901 8.99922 11.0001 7.60422 11.0001H4.39422C2.99922 11.0001 2.95422 10.3901 2.89922 9.60507L2.57422 4.57007'
							stroke='#7E819E'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M5.16406 8.25H6.82906'
							stroke='#7E819E'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M4.75 6.25H7.25'
							stroke='#7E819E'
							stroke-width='1.2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					Cancelled
				</button>
			)}
		</>
	);
}

export default Status;