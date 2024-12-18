import React, { useState } from 'react';

const IconToggle = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex items-center justify-center">
			<button
				onClick={toggleMenu}
				className="flex items-center justify-center w-12 h-12 rounded-md hover:bg-gray-300 transition-all duration-300">
				{/* Conditional rendering for icons */}
				{isOpen ? (
					// Cross Icon
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6 font-bold text-black"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				) : (
					// Bars Icon
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-6 h-6 text-black font-bold"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				)}
			</button>
		</div>
	);
};

export default IconToggle;
