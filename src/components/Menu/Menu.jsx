import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Menu"
function Menu(){
  return (
    <nav class="sidenav">
      <ul class="main-buttons">
        <Router>
          <Routes>
            <Route path="/" element={""}/> 
            <Route path="/" element={""}/> 
          </Routes>
        </Router>
        <li className="hdr">
          morteam<span className="dot">.</span>
        </li>
        <li>
          <button
          >
            Add Task
          </button>
        </li>
        <li>
          <button style={{ color: "white", textdecoration: "none" }}>
            View Tasks
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default Menu;