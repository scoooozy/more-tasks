import * as React from "react";
import "./Menu.css";
import eye from "./eye.svg";
import plus from "./plus-circle.svg";
import DateTime from "./datetime"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";


           
function Menu() {
  let navigate = useNavigate();
  return (
    <div className="main-page">
      <nav className="sidenav">
        <ul className="main-buttons">
          <li className="hdr">
            mortasks<span className="dot">.</span>
          </li>
          <li>
            <button onClick={() => navigate("/form")}>
              <img src={plus} className="plus" /> Add Task
            </button>
          </li>
          <li>
            <button
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => {
                navigate("/table");
              }}
            >
              <img src={eye} className="eye" />
              View Tasks
            </button>
          </li>
          <li>
            <button
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => {
                navigate("/completed");
              }}
            >
              <img src={eye} className="eye" />
              Completed Tasks
            </button>
          </li>
        </ul>
      </nav>
      <section className="fun">
          <div className="date-and-countdown">
              <DateTime/>
          </div>
      </section>
    </div>
  );
}
export default Menu;
