/** @format */

import React from 'react';

const StatusButton = ({ status, width }) => {
	return (
		<>
			{status === 'approved' && (
				<button
					className={`flex gap-1 items-center bg-[#EAF1FC] justify-center px-1 py-1 mb-2 text-black border border-[#2D78E6] rounded-full`}
					style={{
						width: width,
					}}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'>
						<path
							d='M7.99967 1.33301C4.32634 1.33301 1.33301 4.32634 1.33301 7.99967C1.33301 11.673 4.32634 14.6663 7.99967 14.6663C11.673 14.6663 14.6663 11.673 14.6663 7.99967C14.6663 4.32634 11.673 1.33301 7.99967 1.33301ZM11.1863 6.46634L7.40634 10.2463C7.31301 10.3397 7.18634 10.393 7.05301 10.393C6.91967 10.393 6.79301 10.3397 6.69967 10.2463L4.81301 8.35967C4.61967 8.16634 4.61967 7.84634 4.81301 7.65301C5.00634 7.45967 5.32634 7.45967 5.51967 7.65301L7.05301 9.18634L10.4797 5.75968C10.673 5.56634 10.993 5.56634 11.1863 5.75968C11.3797 5.95301 11.3797 6.26634 11.1863 6.46634Z'
							fill='#2D78E6'
						/>
					</svg>
					Approved
				</button>
			)}

			{status === 'pending' && (
				<button
					className={`flex gap-1 items-center bg-[#FFF4D9] justify-center px-1 py-1 mb-2 text-black border border-[#FFBD12] rounded-full`}
					style={{
						width: width,
					}}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'>
						<path
							d='M7.98014 1.33301C4.30014 1.33301 1.31348 4.31967 1.31348 7.99967C1.31348 11.6797 4.30014 14.6663 7.98014 14.6663C11.6601 14.6663 14.6468 11.6797 14.6468 7.99967C14.6468 4.31967 11.6668 1.33301 7.98014 1.33301ZM10.8201 8.81967C10.8201 9.92634 9.92681 10.8197 8.82014 10.8197H7.18014C6.07348 10.8197 5.18014 9.92634 5.18014 8.81967V7.17968C5.18014 6.07301 6.07348 5.17967 7.18014 5.17967H8.82014C9.92681 5.17967 10.8201 6.07301 10.8201 7.17968V8.81967Z'
							fill='#FFBD12'
						/>
					</svg>
					Pending
				</button>
			)}

			{status === 'blocked' && (
				<button
					className={`flex gap-1 items-center bg-[#FAE7EA] justify-center px-1 py-1 mb-2 text-black border border-[#CA1432] rounded-full`}
					style={{
						width: width,
					}}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'>
						<path
							d='M7.98014 1.33301C4.30014 1.33301 1.31348 4.31967 1.31348 7.99967C1.31348 11.6797 4.30014 14.6663 7.98014 14.6663C11.6601 14.6663 14.6468 11.6797 14.6468 7.99967C14.6468 4.31967 11.6668 1.33301 7.98014 1.33301ZM10.8201 8.81967C10.8201 9.92634 9.92681 10.8197 8.82014 10.8197H7.18014C6.07348 10.8197 5.18014 9.92634 5.18014 8.81967V7.17968C5.18014 6.07301 6.07348 5.17967 7.18014 5.17967H8.82014C9.92681 5.17967 10.8201 6.07301 10.8201 7.17968V8.81967Z'
							fill='#CA1432'
						/>
					</svg>
					Blocked
				</button>
			)}

			{status === 'notified' && (
				<button
					className={`flex gap-1 items-center bg-[#EEEDF9] justify-center px-1 py-1 mb-2 text-black border border-purple-500 rounded-full`}
					style={{
						width: width,
					}}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='18'
						height='18'
						viewBox='0 0 16 16'
						fill='none'>
						<path
							d='M7.99973 3.09961C4.81306 3.09961 2.21973 5.69294 2.21973 8.87961C2.21973 12.0663 4.81306 14.6663 7.99973 14.6663C11.1864 14.6663 13.7797 12.0729 13.7797 8.88628C13.7797 5.69961 11.1864 3.09961 7.99973 3.09961ZM8.49973 8.66628C8.49973 8.93961 8.27306 9.16628 7.99973 9.16628C7.72639 9.16628 7.49973 8.93961 7.49973 8.66628V5.33294C7.49973 5.05961 7.72639 4.83294 7.99973 4.83294C8.27306 4.83294 8.49973 5.05961 8.49973 5.33294V8.66628Z'
							fill='#6047F9'
						/>
						<path
							d='M9.92708 2.29967H6.07375C5.80708 2.29967 5.59375 2.08634 5.59375 1.81967C5.59375 1.55301 5.80708 1.33301 6.07375 1.33301H9.92708C10.1937 1.33301 10.4071 1.54634 10.4071 1.81301C10.4071 2.07967 10.1937 2.29967 9.92708 2.29967Z'
							fill='#6047F9'
						/>
					</svg>
					Notified
				</button>
			)}
		</>
	);
};

export default StatusButton;
