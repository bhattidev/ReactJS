import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import NavTalent from './NavTalent';

function NavLinks() {
	const [isVisible, setVisible] = useState(false);

	const handleMouseEnter = () => {
		setVisible(true);
	};
	const handleMouseLeave = () => {
		setVisible(false);
	};

	return (
		<>
			<ul className="flex flex-col lg:flex-row justify-center text-start items-start lg:items-center gap-4 -ml-1 group">
				{/* Top 3% */}
				<li>
					<a
						href=""
						className="py-5 opacity-80 group-hover:opacity-50 hover:!opacity-100 hover:border-b-2 hover:border-blue-800 transition-opacity">
						Top 3%
					</a>
				</li>

				{/* Hire Talent with dropdown */}
				<li
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					<div className="opacity-80 group-hover:opacity-50 hover:!opacity-100 border-b-2 border-transparent hover:border-blue-800 flex items-center transition-opacity">
						<span className="peer lg:py-5 pr-1">Hire Talent</span>
						<IoIosArrowDown
							className={`size-3 transition-transform ${
								isVisible ? 'rotate-180' : ''
							}`}
						/>
					</div>
					<div
						className={`transition-all duration-300 ease-in-out overflow-hidden ${
							isVisible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
						}`}>
						<NavTalent />
					</div>
				</li>

				{/* Consulting & Services */}
				<li>
					<a
						href=""
						className="py-5 opacity-80 group-hover:opacity-50 hover:!opacity-100 hover:border-b-2 hover:border-blue-800 transition-opacity">
						Consulting & Services
					</a>
				</li>

				{/* Clients */}
				<li>
					<a
						href=""
						className="py-5 opacity-80 group-hover:opacity-50 hover:!opacity-100 hover:border-b-2 hover:border-blue-800 transition-opacity">
						Clients
					</a>
				</li>

				{/* Blog */}
				<li>
					<a
						href=""
						className="py-5 opacity-80 group-hover:opacity-50 hover:!opacity-100 hover:border-b-2 hover:border-blue-800 transition-opacity">
						Blog
					</a>
				</li>

				{/* About Us */}
				<li>
					<a
						href=""
						className="py-5 opacity-80 group-hover:opacity-50 hover:!opacity-100 hover:border-b-2 hover:border-blue-800 transition-opacity">
						About Us
					</a>
				</li>
			</ul>
		</>
	);
}

export default NavLinks;
