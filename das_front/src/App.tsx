import { ToastContainer } from "react-toastify";
import Router from "./router";
import GlobalStyle from "./style/gloablStyle.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router></Router>
      <ToastContainer />
    </>
  );
}

export default App;
