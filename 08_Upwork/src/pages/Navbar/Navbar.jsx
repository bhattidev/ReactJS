import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import FindWork from './FindWork';

const Navbar = () => {
	return (
		<div className="w-full text-nowrap">
			<ul className="flex justify-center items-center">
				<li className="group p-2 hover:text-green-700">
					<Link to="">
						Find Talent{' '}
						<IoIosArrowDown className="size-3 inline group-hover:rotate-180" />
					</Link>
				</li>
				<li className="group  relative inline-block flex-no">
					<Link
						to=""
						className="p-2 hover:text-green-700">
						Find work{' '}
						<IoIosArrowDown className="size-3 inline group-hover:rotate-180" />
					</Link>
					{/* <div className="absolute top-14  group-hover:block">
						<FindWork />
					</div> */}
				</li>

				<li className="group p-2 hover:text-green-700">
					<Link to="">
						Why Upwork{' '}
						<IoIosArrowDown className="size-3 inline group-hover:rotate-180" />
					</Link>
				</li>
				<li className="group p-2 hover:text-green-700">
					<Link to="">
						What's new{' '}
						<IoIosArrowDown className="size-3 inline group-hover:rotate-180" />
					</Link>
				</li>
				<li className="p-2 hover:text-green-700">
					<Link to="">Enterprise</Link>
				</li>
				<li className="p-2 hover:text-green-700">
					<Link to="">Pricing</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
