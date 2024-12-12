import React from 'react';
import logo from '../assets/Images/logo/crisp_logo.png';
import { FaSearch } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { HiOutlineShoppingBag } from 'react-icons/hi';

function Header() {
	return (
		<>
			<div className="flex justify-between bg-black text-white p-5">
				<div>
					<img
						src={logo}
						alt="header-logo"
					/>
				</div>
				<div className="flex justify-center items-center">
					<ul className="flex justify-center items-center gap-3 list-none">
						<li className=""> HOME</li>
						<li>
							<a href=""></a> SHOP
						</li>
						<li>
							<a href=""></a> BLOG
						</li>
						<li>
							<a href=""></a> SALE
						</li>
						<li>
							<a href=""></a> CONTACT US
						</li>
						<li className="flex justify-center items-center gap-1">
							<FaSearch />
							<div>SEARCH</div>
						</li>
					</ul>
				</div>
				<div className="flex items-center justify-center gap-6">
					<div className="flex justify-center items-center gap-3">
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
