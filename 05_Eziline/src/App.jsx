import './App.css';
import AboutEziline from './components/AboutEziline';
import Header from './components/Header/Header';
import HeaderTop from './components/Header/HeaderTop';
import ProjectManagementSection from './components/ProjectManagement';
import ServiceList from './components/ServiceList';

function App() {
	return (
		<div className="flex flex-col justify-center items-center">
			<HeaderTop />
			<Header />
			<AboutEziline />
			<ProjectManagementSection />
			<ServiceList />
		</div>
	);
}

export default App;
