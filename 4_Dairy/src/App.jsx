import { useState } from 'react';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
	const [bodyContent, setBodyContent] = useState('Default Text');
	const handleButtonClick = (btn) => {
		setBodyContent(`You click ${btn}`);
	};
	return (
		<>
			<Header />
			<div className="flex">
				<SideBar onButtonClick={handleButtonClick} />
				<Body content={bodyContent} />
				<div>
					<routes>
						<route path="" />
					</routes>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default App;
