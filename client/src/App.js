import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./elements/Home"
import CheckBalance from "./elements/CheckBalance";
import "./elements/custom.css"
import ReactGA from 'react-ga4';




function App() {
  ReactGA.initialize('G-1785PHKT3V');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CheckBalance" element={<CheckBalance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;