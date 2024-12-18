import React, { useState } from 'react';
import toptal_logo from '../assets/images/header/images.avif';
import NavLinks from '../nav/NavLinks';
import HireTopTalent from '../components/Header/HireTopTalent';
import IconToggle from '../components/Header/IconToggle';

const Header = () => {
	const [isNavVisible, setIsNavVisible] = useState(false);

	const toggleNav = () => {
		setIsNavVisible(!isNavVisible);
	};

	return (
		<>
			{/* Header Top Section */}
			<div className="bg-gray-300 flex justify-between items-center px-5 xl:px-10 text-xs">
				{/* Logo & Navigation Links */}
				<div className="flex justify-between items-center">
					<img
						src={toptal_logo}
						alt="Toptal logo"
						className="mr-3 xl:mr-10"
						height="28px"
						width="116px"
					/>
					<div className="hidden lg:block">
						<NavLinks />
					</div>
				</div>

				{/* Right Section */}
				<div className="flex justify-end items-center gap-3 opacity-80 cursor-pointer">
					<div className="hidden lg:block py-5 hover:text-blue-600">
						Apply as a Freelance
					</div>
					<div className="bg-green-400 hover:bg-green-500 rounded py-3 px-6 text-white font-semibold hidden lg:block">
						<HireTopTalent />
					</div>
					<div className="hidden lg:block py-5 hover:text-blue-600">Login</div>

					{/* Toggle Icon for Mobile */}
					<div
						className="lg:hidden cursor-pointer"
						onClick={toggleNav}>
						<IconToggle />
					</div>
				</div>
			</div>

			{/* Accordion NavLinks */}
			<div
				className={`lg:hidden overflow-hidden transition-all duration-500 text-sm pt-5 ${
					isNavVisible ? 'max-h-screen' : 'max-h-0'
				}`}>
				<div className="pl-5 sm:pl-10">
					<NavLinks />
				</div>
				<div className="flex flex-col justify-center items-center gap-3 pt-5 opacity-80 cursor-pointer">
					<div className="hover:text-blue-600">Apply as a Freelance</div>
					<div className="bg-green-400 rounded py-2 px-6 text-white font-semibold block lg:hidden">
						<HireTopTalent />
					</div>
					<div className="hover:text-blue-600">Login</div>
				</div>
			</div>
		</>
	);
};

export default Header;
