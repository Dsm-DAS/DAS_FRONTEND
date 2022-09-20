import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Slide from './components/Slide';
import MainPage from './pages/MainPage';
import SignUp from './components/SignUp';

function Router() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />}></Route>
				<Route path="/slide" element={<Slide />}></Route>
				<Route path="/SignUp" element={<SignUp />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default Router;
