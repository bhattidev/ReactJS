import React from 'react';
import Header from './Header';

import HeroSection from '../components/HeroSection/HeroSection';

function Layout() {
	return (
		<div className="w-full">
			<Header />
			<HeroSection />
		</div>
	);
}

export default Layout;
