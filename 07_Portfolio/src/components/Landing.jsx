import React from 'react';
import imranImage from '../assets/images/imran.jpeg';

const Landing = () => {
	return (
		<section
			id="landing"
			className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-500 to-blue-800 text-white text-center px-4">
			<img
				src={imranImage}
				alt="Avatar"
				className="rounded-full w-32 h-32 md:w-40 md:h-40 mb-4 border-4 border-white"
			/>
			<h2 className="text-4xl font-bold md:text-5xl">Muhammad Imran</h2>
			<p className="text-lg md:text-xl text-gray-300 mt-2 max-w-xl">
				I'm a passionate Frontend Developer with experience in React, Tailwind
				CSS, and creating user-friendly interfaces. Let's build something
				amazing together!
			</p>
		</section>
	);
};

export default Landing;
