import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignPage/SignUpPage";
import LoginPage from "./pages/SignPage/LoginPage";
import MyPage from "./pages/MyPage";
import Slide from "./components/Slide";

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
