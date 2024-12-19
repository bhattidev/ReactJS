import React from 'react';
import HireTheTopMain from './HireTheTopMain';
import HeroData from './HeroData';

function HeroSection() {
	return (
		<>
			<div className="flex flex-col sm:flex-row bg-gray-400 py-10 px-10">
				<div className="w-1/2">
					<HireTheTopMain />
				</div>
				<div className="w-1/2">
					<HeroData />
				</div>
			</div>
		</>
	);
}

export default HeroSection;
