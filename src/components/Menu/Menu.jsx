import React from "react";
import "./Menu.css"
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

function Menu(){
  let navigate = useNavigate()
  return (
    <nav className="sidenav">
      <ul className="main-buttons">
        <li className="hdr">
          morteam<span className="dot">.</span>
        </li>
        <li>
          <button onClick={() => navigate("/form")}>
            Add Task
          </button>
        </li>
        <li>
          <button style={{ color: "white", textDecoration: "none" }} onClick={()=>{
            navigate("/table")
          }}>
            View Tasks
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default Menu;