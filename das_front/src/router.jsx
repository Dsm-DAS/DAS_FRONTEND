import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import SignUpEmail from "./pages/SignPage/SignUp/SignUpEmail";
import LoginPage from "./pages/SignPage/SignIn/LoginPage";
import SetPwPage from "./pages/SignPage/SignUp/SetPw";
import MyPage from "./pages/MyPage";
import ClubPage from "./pages/Club/ClubPage";
import Student from "./pages/StudentPage";
import SetPrivacy from "./pages/SignPage/SignUp/SetPrivacy";
import GatherPage from "./pages/Gather/GatherPage";
import ClubDetail from "./pages/Club/ClubDetailPage";
import GatherDetail from "./pages/Gather/GahterDetail";
import GatherCreate from "./pages/Gather/GatherCreate";

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
        <Route path="/gather" element={<GatherPage />} />
        <Route path="/club/:id" element={<ClubDetail />} />
        <Route path="/gather/:id" element={<GatherDetail />} />
        <Route path="/gather/create" element={<GatherCreate />} />
        <Route path="/notice" element={<></>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
