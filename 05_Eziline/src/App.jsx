import './App.css';
import Header from './components/Header';
import HeaderTop from './components/HeaderTop';

function App() {
	return (
		<div className="flex flex-col justify-center items-center">
			<HeaderTop />
			<Header />
		</div>
	);
}

export default App;
