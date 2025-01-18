import React from 'react';
import logo from '../assets/images/header/logo.png';
import bgImage from '../assets/images/home/bg_image.png';
import { FaSearch } from 'react-icons/fa';
import StarBackground from './StartBackground';
import AnniversaryButton from './AnniversaryButton';

const Header = () => {
	return (
		<>
			<div className="relative w-full h-screen">
				{/* Background Image */}
				<img
					src={bgImage}
					className="w-full h-full object-cover absolute top-0 left-0 z-20"
					alt="Background"
				/>

				{/* Star Background */}
				<StarBackground numberOfStars={500} />

				{/* Navigation */}
				<div className="relative z-10 p-4 text-white">
					<ul className="flex justify-center items-center px-10">
						<li>
							<a href="">
								<img
									className="bg-transparent"
									src={logo}
									alt="Logo"
								/>
							</a>
						</li>
						<li className="hover:text-blue-400 p-5 transition-all ">
							<a href="">HOME</a>
						</li>
						<li className="hover:text-blue-400 p-5 transition-all">
							<a href="">SERVICES</a>
						</li>
						<li className="hover:text-blue-400 p-5 transition-all">
							<a href="">PORTFOLIO</a>
						</li>
						<li className="hover:text-blue-400 p-5 transition-all">
							<a href="">EZI UPDATES</a>
						</li>
						<li className="hover:text-blue-400 p-5 transition-all">
							<a href="">SOFTWARES</a>
						</li>
						<li className="hover:text-blue-400 p-5 transition-all">
							<a href="">LOGIN</a>
						</li>
						<li className="hover:text-blue-400 p-5 transition-all">
							<a href="">CONTACT</a>
						</li>
						<li>
							<AnniversaryButton />
						</li>
						<li className="hover:text-blue-400 p-5 transition-all">
							<a href="#">
								<FaSearch />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
