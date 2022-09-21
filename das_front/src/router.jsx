import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slide from "./components/Slide";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage"

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/slide" element={<Slide />}></Route>
        <Route path="/SignUp" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/My" element={<MyPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
