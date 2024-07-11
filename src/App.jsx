import { Outlet } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';

function App() {
	return (
		<>
			<NavbarComponent />
			<HeroComponent />
			<Outlet />
		</>
	);
}

export default App;
