import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignPage/SignUpPage";
import LoginPage from "./pages/SignPage/LoginPage";
import MyPage from "./pages/MyPage";
import ClubPage from "./pages/ClubPage";
import Student from "./pages/StudentPage";
import NoticePage from "./pages/NoticePage";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/club" element={<ClubPage />} />
        <Route path="/student" element={<Student />} />
        <Route path="/notice" element={<NoticePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
