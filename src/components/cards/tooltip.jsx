/** @format */

// /** @format */

// import React from 'react';

// function Tooltip({ title, description, width, bg, colour, height }) {
// 	const styles = {
// 		container: {
// 			width: '12px',
// 			height: '12px',
// 			gap: '0px',
// 			borderRadius: '1px 0px 0px 0px',
// 			opacity: '0',
// 			transform: 'rotate(-45deg)',
// 			backgroundColor: '#000',
// 		},
// 	};
// 	return (
// 		<>
// 			<div
// 				className={`bg-[${bg}] text-[${colour}] rounded-lg shadow-lg p-4`}
// 				style={{ width: width, height: height }}>
// 				<h3 className='text-lg font-semibold'>{title}</h3>
// 				<p className='text-sm'>{description}</p>
// 			</div>
// 			<div style={styles.container}></div>
// 		</>
// 	);
// }

// export default Tooltip;

/** @format */
import React from 'react';

function Tooltip({ num }) {
	return (
		<>
			{num == 1 && (
				<div className='w-[320px] relative'>
					<div
						className={`bg-[#151433] text-[#F2F2F2] w-[320px] rounded-lg shadow-lg p-4`}>
						<h3 className='text-lg font-semibold'>Sourcing & Screening</h3>
						<p className='text-sm'>
							Tooltips are used to describe or identify an element. In most
							scenarios, tooltips help the user understand meaning, function or
							alt-text.
						</p>
					</div>
					<svg
						className='absolute bottom-[-8px] left-72 transform -translate-x-1/2' // Centering the pointer
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='12'
						viewBox='0 0 16 9'
						fill='none'>
						<path
							d='M14.0711 0.485289C14.962 0.485289 15.4081 1.56243 14.7782 2.1924L8.70711 8.26347C8.31658 8.654 7.68342 8.654 7.29289 8.26347L1.22183 2.1924C0.591867 1.56243 1.03803 0.485289 1.92894 0.485289L14.0711 0.485289Z'
							fill='#151433'
						/>
					</svg>
				</div>
			)}
			{num == 2 && (
				<div className='w-[320px] relative'>
					<div
						className={`bg-[#FFFFFF] text-[#000] w-[320px] rounded-lg shadow-lg p-4`}>
						<h3 className='text-lg font-semibold'>Sourcing & Screening</h3>
						<p className='text-sm text-[#545670]'>
							Tooltips are used to describe or identify an element. In most
							scenarios, tooltips help the user understand meaning, function or
							alt-text.
						</p>
					</div>
					<svg
						className='absolute bottom-[-8px] left-72 transform -translate-x-1/2'
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='9'
						viewBox='0 0 16 9'
						fill='none'>
						<path
							d='M14.0711 0.485289C14.962 0.485289 15.4081 1.56243 14.7782 2.1924L8.70711 8.26347C8.31658 8.654 7.68342 8.654 7.29289 8.26347L1.22183 2.1924C0.591867 1.56243 1.03803 0.485289 1.92894 0.485289L14.0711 0.485289Z'
							fill='white'
						/>
					</svg>
				</div>
			)}
			{num == 3 && (
				<div className='w-[320px] relative'>
					<div
						className={`bg-[#FFFFFF] text-[#545670] w-[320px] rounded-lg shadow-lg p-4`}>
						<p className='text-sm'>
							Tooltips are used to describe or identify an element. In most
							scenarios, tooltips help the user understand meaning, function or
							alt-text.
						</p>
					</div>

					<svg
						className='absolute bottom-[-8px] left-72 transform -translate-x-1/2'
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='9'
						viewBox='0 0 16 9'
						fill='none'>
						<path
							d='M14.0711 0.485289C14.962 0.485289 15.4081 1.56243 14.7782 2.1924L8.70711 8.26347C8.31658 8.654 7.68342 8.654 7.29289 8.26347L1.22183 2.1924C0.591867 1.56243 1.03803 0.485289 1.92894 0.485289L14.0711 0.485289Z'
							fill='white'
						/>
					</svg>
				</div>
			)}
			{num == 4 && (
				<div className='w-[320px] relative'>
					<div
						className={`bg-[#151433] text-[#F2F2F2] w-[320px] rounded-lg shadow-lg p-4`}>
						<p className='text-sm'>
							Tooltips are used to describe or identify an element. In most
							scenarios, tooltips help the user understand meaning, function or
							alt-text.
						</p>
					</div>
					<svg
						className='absolute bottom-[-8px] left-72 transform -translate-x-1/2' // Centering the pointer
						xmlns='http://www.w3.org/2000/svg'
						width='12'
						height='12'
						viewBox='0 0 16 9'
						fill='none'>
						<path
							d='M14.0711 0.485289C14.962 0.485289 15.4081 1.56243 14.7782 2.1924L8.70711 8.26347C8.31658 8.654 7.68342 8.654 7.29289 8.26347L1.22183 2.1924C0.591867 1.56243 1.03803 0.485289 1.92894 0.485289L14.0711 0.485289Z'
							fill='#151433'
						/>
					</svg>
				</div>
			)}
		</>
	);
}

export default Tooltip;
