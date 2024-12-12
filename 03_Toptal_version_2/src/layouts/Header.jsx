import React from 'react';
import toptal_logo from '../assets/images/header/images.avif';

const Header = () => {
	return (
		<div className="bg-gray-300 flex justify-between items-center gap-20 px-20 text-sm">
			<div className="flex justify-between items-center ">
				<img
					src={toptal_logo}
					alt="Toptal logo"
					className="mr-10"
					height="28px"
					width="116px"
				/>
				<ul className="flex justify-center items-center gap-2 -ml-1">
					<li className="">
						<a href="">Top 3%</a>
					</li>
					<li>Hire Talent</li>
					<li>
						<a href="">Consulting & Services</a>
					</li>
					<li>
						<a href="">Clients</a>
					</li>
					<li>
						<a href="">Blog</a>
					</li>
					<li>
						<a href="">About Us</a>
					</li>
				</ul>
			</div>
			<div className="flex justify-center items-center gap-3 min-w-[768px] ml-auto ">
				<div>Apply as a Freelance</div>
				<div>Hire Toptal</div>
				<div>Login</div>
			</div>
		</div>
	);
};

export default Header;
