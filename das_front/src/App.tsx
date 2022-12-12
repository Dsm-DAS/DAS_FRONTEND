import { ToastContainer } from "react-toastify";
import Router from "./router";
import GlobalStyle from "./style/gloablStyle.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <GlobalStyle />
        <Router></Router>
        <ToastContainer />
      </Suspense>
    </>
  );
}

export default App;
