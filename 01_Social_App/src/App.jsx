import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import PostList from './components/PostList';
import { useState } from 'react';
import CreatePost from './components/CreatePost';
import PostListProvider from './store/post-list-store';

function App() {
	const [selectedTab, setSelectedTab] = useState('Home');
	return (
		<PostListProvider>
			<div className="flex">
				<Sidebar
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
				/>
				<div className="w-full">
					<Header />
					{selectedTab === 'Home' ? <PostList /> : <CreatePost />}
					<Footer />
				</div>
			</div>
		</PostListProvider>
	);
}

export default App;
