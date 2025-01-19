import React, { useEffect } from 'react';
import '../assets/style/AboutEziline.css';

const AboutEziline = () => {
	useEffect(() => {
		const adjustFullWidthPosition = () => {
			const element = document.getElementById('about-eziline');
			if (element) {
				const parentWidth =
					element.offsetParent?.clientWidth || window.innerWidth;
				const offsetLeft = (window.innerWidth - parentWidth) / 2;
				element.style.left = `-${offsetLeft}px`;
				element.style.width = `${parentWidth}px`;
			}
		};

		// Adjust on mount and on window resize
		adjustFullWidthPosition();
		window.addEventListener('resize', adjustFullWidthPosition);

		// Cleanup event listener on unmount
		return () => window.removeEventListener('resize', adjustFullWidthPosition);
	}, []);

	return (
		<div className="bgImage bg-cover bg-center bg-no-repeat w-full h-full pb-60 lg:pb-80 pt-10 px-4 md:px-10 lg:px-20">
			<div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
				{/* Left Column */}
				<div className="md:w-1/2 text-white">
					<h2 className="text-left text-2xl md:text-3xl font-bold">
						<span>ABOUT </span>
						<span className="pl-5 pr-5">
							<span className="text-teal-400">E</span>
							<span className="text-green-500">Z</span>
							<span className="text-cyan-400">I</span>
							<span className="text-blue-400">L</span>
							<span className="text-blue-600">I</span>
							<span className="text-blue-600">N</span>
							<span className="text-blue-600">E</span>
						</span>
					</h2>
					<ul className="mt-5 list-inside space-y-2">
						<li className="flex items-center">
							<span className="text-red-500 mr-2">★</span>
							Eziline is an independent Pakistan-based company
						</li>
						<li className="flex items-center">
							<span className="text-red-500 mr-2">★</span>
							Operating since 2007 – Eziline has been profitable since the
							beginning
						</li>
						<li className="flex items-center">
							<span className="text-red-500 mr-2">★</span>
							We are website specialists (web design, dynamic web solutions,
							graphic design, multimedia development)
						</li>
						<li className="flex items-center">
							<span className="text-red-500 mr-2">★</span>A close-knit team of
							350+ designers
						</li>
						<li className="flex items-center">
							<span className="text-red-500 mr-2">★</span>
							Programmers
						</li>
						<li className="flex items-center">
							<span className="text-red-500 mr-2">★</span>
							System analysts and marketing executives
						</li>
					</ul>
				</div>

				{/* Right Column */}
				<div className="md:w-1/2 mt-8 md:mt-0 bg-gray-200 p-6 rounded-xl shadow-lg hidden md:block">
					<div className="relative w-full sm:h-[300px] md:h-[350px] bg-gray-800 border-4 border-gray-900 rounded-xl">
						{/* Laptop Screen */}
						<div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-t from-gray-800 to-gray-700 rounded-xl overflow-hidden">
							<iframe
								className="w-full h-full rounded-xl"
								src="https://www.youtube.com/embed/PTqcbyRa9mU?autoplay=0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								title="Eziline Video"></iframe>
						</div>
						{/* Laptop Body */}
						<div className="absolute bottom-0 left-0 w-full h-[40px] bg-gray-700 rounded-b-xl"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutEziline;
