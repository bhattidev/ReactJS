import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
	const [isHidden, setIsHidden] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [lastScroll, setLastScroll] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;
			setIsHidden(currentScroll > lastScroll && currentScroll > 50);
			setLastScroll(currentScroll);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScroll]);

	return (
		<header
			className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${
				isHidden ? '-translate-y-full' : 'translate-y-0'
			}`}>
			<div className="container mx-auto flex justify-between items-center p-4">
				<h1 className="text-xl font-bold">My Portfolio</h1>
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="md:hidden focus:outline-none">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
				<nav
					className={`${
						isMenuOpen ? 'block' : 'hidden'
					} md:block absolute md:static bg-white top-full left-0 w-full md:w-auto`}>
					<ul className="flex flex-col md:flex-row md:space-x-4">
						<li>
							<Link
								to="landing"
								smooth={true}
								duration={500}
								className="block md:inline hover:text-blue-500 px-4 py-2 md:p-0">
								Home
							</Link>
						</li>
						<li>
							<Link
								to="projects"
								smooth={true}
								duration={500}
								className="block md:inline hover:text-blue-500 px-4 py-2 md:p-0">
								Projects
							</Link>
						</li>
						<li>
							<Link
								to="contact"
								smooth={true}
								duration={500}
								className="block md:inline hover:text-blue-500 px-4 py-2 md:p-0">
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
