import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Banana from "./Banana";
import Cake from "./Cake";
import Teapot from "./Tea";
import NavBar from "./NavBar";
import "./VendingMachine.css";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/banana" element={<Banana />} />
            <Route path="/cake" element={<Cake />} />
            <Route path="/teapot" element={<Teapot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;