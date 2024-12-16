import React from 'react';
import logo from '../assets/Images/logo/crisp_logo.png';
import { FaSearch } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { HiOutlineShoppingBag } from 'react-icons/hi';

function Header() {
	return (
		<>
			<div className="flex justify-between bg-black text-white text-xs p-5">
				<div>
					<img
						src={logo}
						alt="header-logo"
					/>
				</div>
				<div className="flex justify-center items-center">
					<ul className="flex justify-center items-center gap-3 list-none font-bold">
						<li className=""> HOME</li>
						<li>
							<a href="">SHOP</a>
						</li>
						<li>
							<a href="">BLOG</a>
						</li>
						<li>
							<a href="">SALE</a>
						</li>
						<li>
							<a href="">CONTACT US</a>
						</li>
						<li className="flex justify-center items-center gap-1">
							<FaSearch />
							<div>SEARCH</div>
						</li>
					</ul>
				</div>
				<div className="flex items-center justify-center gap-6">
					<div className="flex justify-center items-center gap-3 font-bold">
						<div>Sing In</div>
						<div>Create an Account</div>
					</div>
					<div className="flex justify-center items-center gap-1">
						<CiHeart className="size-7" />
						<HiOutlineShoppingBag className="size-7" />
						<div className="">
							<p>Shoping Cart</p>
							<b>0,00 EUR</b>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
