import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import SignUpEmail from "./pages/SignPage/SignUp/SignUpEmail";
import LoginPage from "./pages/SignPage/SignIn/LoginPage";
import SetPwPage from "./pages/SignPage/SignUp/SetPw";
import MyPage from "./pages/MyPage";
import ClubPage from "./pages/ClubPage";
import Student from "./pages/StudentPage";
import NoticePage from "./pages/NoticePage";
import SetPrivacy from "./pages/SignPage/SignUp/SetPrivacy"

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signUp" element={<SignUpEmail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/setPw" element={<SetPwPage />} />
        <Route path="/setPrivacy" element={<SetPrivacy />} />
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
