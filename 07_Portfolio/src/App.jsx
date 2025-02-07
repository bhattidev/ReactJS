import React from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
	return (
		<div>
			<Header />
			<Landing />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
