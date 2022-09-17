import React from "react";
import Router from "./router";
import GlobalStyle from "./style/global";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router></Router>
    </>
  );
}

export default App;
