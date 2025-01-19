import React, { useState } from 'react';
import logo from '../../assets/images/header/logo.png';
import bgImage from '../../assets/images/home/bg_image.png';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import StarBackground from './StartBackground';
import AnniversaryButton from './AnniversaryButton';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<div className="relative w-full h-screen">
				{/* Background Image */}
				<img
					src={bgImage}
					className="w-full h-full object-cover  absolute top-0 left-0 z-20"
					alt="Background"
				/>

				{/* Star Background */}
				<StarBackground numberOfStars={500} />

				{/* Navigation */}
				<div className="relative z-30 p-4 text-white">
					<div className="flex justify-between items-center px-6 md:flex-col xl:flex-row  md:px-10">
						{/* Logo */}
						<a href="">
							<img
								className="bg-transparent"
								src={logo}
								alt="Logo"
							/>
						</a>

						{/* Hamburger Menu Icon */}
						<div
							className="md:hidden text-2xl cursor-pointer"
							onClick={toggleMenu}>
							{menuOpen ? <FaTimes /> : <FaBars />}
						</div>

						{/* Desktop Menu */}
						<ul className="hidden md:flex justify-center items-center space-x-3  lg:space-x-6 text-nowrap text-sm">
							<li className="hover:text-blue-400 transition-all">
								<a href="">HOME</a>
							</li>
							<li className="hover:text-blue-400 transition-all">
								<a href="">SERVICES</a>
							</li>
							<li className="hover:text-blue-400 transition-all">
								<a href="">PORTFOLIO</a>
							</li>
							<li className="hover:text-blue-400 transition-all">
								<a href="">EZI UPDATES</a>
							</li>
							<li className="hover:text-blue-400 transition-all">
								<a href="">SOFTWARES</a>
							</li>
							<li className="hover:text-blue-400 transition-all">
								<a href="">LOGIN</a>
							</li>
							<li className="hover:text-blue-400 transition-all">
								<a href="">CONTACT</a>
							</li>
							<li>
								<AnniversaryButton />
							</li>
							<li className="hover:text-blue-400 transition-all">
								<a href="#">
									<FaSearch />
								</a>
							</li>
						</ul>
					</div>

					{/* Mobile Menu */}
					{menuOpen && (
						<ul className="absolute top-16 left-0 w-full bg-opacity-80 text-center text-sm flex items-center flex-col space-y-4 py-6 md:hidden">
							<li className="hover:text-blue-400 transition-all">
								<a href="">HOME</a>
							</li>
							<li className="hover:text-blue-400 transition-all">
								<a href="">SERVICES</a>
							</li>
							<li className="hover:text-blue-400 transition-all">
								<a href="">PORTFOLIO</a>
							</li>
							<li className="hover:text-blue-400 transition-all">
								<a href="">EZI UPDATES</a>
							</li>
							<li className="hover:text-blue-400 transition-all">
								<a href="">SOFTWARES</a>
							</li>
							<li className="hover:text-blue-400 transition-all">
								<a href="">LOGIN</a>
							</li>
							<li className="hover:text-blue-400 transition-all">
								<a href="">CONTACT</a>
							</li>
							<li className="pt-5">
								<AnniversaryButton />
							</li>
						</ul>
					)}
				</div>
			</div>
		</>
	);
};

export default Header;
