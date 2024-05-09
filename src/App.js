import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
  });

  return (
    <Provider store={store}>
      <Router className="App">
        <Navbar screenWidth={screenWidth} />
        <Routes>
          <Route path="/" exact element={<Home screenWidth={screenWidth} />} />
          <Route path="*" element={<Home screenWidth={screenWidth} />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
