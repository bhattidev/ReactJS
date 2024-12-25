import React from 'react';
import HireTopTalent from '../Header/HireTopTalent';

function HireTheTopMain() {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1
				className="font-semibold text-4xl mr-10 leading-normal"
				data-testid="hero-title">
				Hire the
				<a
					href=""
					className="underline-offset-8 underline">
					Top 3%
				</a>
				of Freelance Talent
				<sup>®</sup>
			</h1>
			<p className="my-8 text-gray-700 z-20">
				Toptal is an exclusive network of the top freelance software developers,
				designers, marketing experts, finance experts, product managers, and
				project managers in the world. Top companies hire Toptal freelancers for
				their most important projects.
			</p>
			<div className="py-4 px-24 text-white rounded bg-green-400 hover:bg-green-500 font-semibold text-nowrap">
				<HireTopTalent />S
			</div>
		</div>
	);
}

export default HireTheTopMain;
