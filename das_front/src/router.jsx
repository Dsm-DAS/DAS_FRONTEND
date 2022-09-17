import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slide from "./components/Slide";
import MainPage from "./pages/MainPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/slide" element={<Slide></Slide>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
