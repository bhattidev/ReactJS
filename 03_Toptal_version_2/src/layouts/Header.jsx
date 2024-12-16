import React from 'react';
import toptal_logo from '../assets/images/header/images.avif';
import { FaBars } from 'react-icons/fa';

import NavLinks from '../nav/NavLinks';

const Header = () => {
	return (
		<div className="bg-gray-300 flex justify-between items-center px-5 xl:px-10 text-sm ">
			<div className="flex justify-between items-center ">
				<img
					src={toptal_logo}
					alt="Toptal logo"
					className="mr-3 xl:mr-10"
					height="28px"
					width="116px"
				/>
				<NavLinks />
			</div>

			<div className="flex justify-end items-center gap-3 ">
				<div>Apply as a Freelance</div>
				<div className="bg-green-400 rounded py-2 px-6 text-white font-semibold">
					Hire Top Talent
				</div>
				<div>Login</div>
			</div>
		</div>
	);
};

export default Header;
