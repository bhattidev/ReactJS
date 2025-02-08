import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
	return (
		<div className="flex justify-center items-center ">
			<div className="px-2 w-full max-w-[1300px]">
				<Header />
				<main>
					<Outlet />
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</div>
	);
}

export default App;
