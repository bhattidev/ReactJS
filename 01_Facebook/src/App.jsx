import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/Form';
import Post from './components/Post';

function App() {
	return (
		<div className="flex">
			<Sidebar />
			<div className="w-full">
				<Header />
				<CreatePost />
				<Post />
				<Footer />
			</div>
		</div>
	);
}

export default App;
