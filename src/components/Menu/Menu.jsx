import * as React from 'react';
import "./Menu.css";
import eye from "./eye.svg"
import plus from "./plus-circle.svg"


import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function Menu() {
  let navigate = useNavigate();
  return (
    <nav className="sidenav">
      <ul className="main-buttons">
        
        <li className="hdr">
          morteam<span className="dot">.</span>
        </li>
        <li>
          <button onClick={() => navigate("/form")}><img src={plus} className="plus"/> Add Task</button> 
        </li>
        <li>
          
          <button
            style={{ color: "white", textDecoration: "none" }}
            onClick={() => {
              navigate("/table");
            }}
          >
            <img src={eye} className="eye" />View Tasks
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;
