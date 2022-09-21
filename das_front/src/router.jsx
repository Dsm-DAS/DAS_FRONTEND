<<<<<<< Updated upstream
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
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slide from "./components/Slide";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/slide" element={<Slide></Slide>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
>>>>>>> Stashed changes
}

export default Router;
