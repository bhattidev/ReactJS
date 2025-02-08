import React, { useState } from 'react';
import Navbar from '../pages/Navbar/Navbar';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';

const Header = () => {
	const [showSearch, setShowSearch] = useState(true);
	const showSearchHandler = () => {
		setShowSearch(!showSearch);
	};
	return (
		<>
			<div className="flex items-center justify-between gap-2 p-3 text-sm border-b border-gray-200">
				<div className="flex items-center gap-4">
					<span className="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 102 28"
							role="img"
							aria-hidden="true"
							className="max-w-[82px] w-full h-auto ">
							<path
								fill="var(--nav-logo)"
								d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"></path>
							<path
								fill="var(--nav-logo)"
								d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"></path>
							<polygon
								fill="var(--nav-logo)"
								points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"></polygon>
							<path
								fill="var(--nav-logo)"
								d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"></path>
							<path
								fill="var(--nav-logo)"
								d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"></path>
						</svg>
					</span>

					<div className="">
						<Navbar />
					</div>
				</div>
				<div className="flex items-center gap-4 relative">
					<button
						onClick={showSearchHandler}
						className="xl:hidden">
						<IoSearchSharp className="size-5" />
					</button>

					<div
						className={`${showSearch ? 'hidden ' : 'flex absolute  z-10 -bottom-14 '} w-full min-w-80 xl:flex right-44 hover:bg-gray-100 border border-gray-200 bg-white  items-center py-1 rounded-full group`}>
						<input
							type="text"
							className="pl-8 outline-none  w-full  rounded-full py-1 focus:bg-white"
							placeholder="Search"
						/>
						<Link className="absolute left-2">
							<IoSearchSharp className="size-5" />
						</Link>

						<Link className="group border-l px-5 hover:py-2 hover:rounded-full border-gray-200 hover:bg-white text-nowrap">
							Talent{' '}
							<IoIosArrowDown className="size-3 inline group-hover:rotate-180" />
						</Link>
					</div>

					<button className="p-2">
						<Link>Login</Link>
					</button>
					<button className="bg-green-600 hover:bg-green-700 py-2 px-6 rounded-2xl text-nowrap">
						<Link>Sign up</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default Header;
