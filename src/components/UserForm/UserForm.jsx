import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./Userform.css";
import send from  "./send.svg"
let date = new Date();
let fdate = date.toISOString().substring(0, 10);

const UserForm = (props) => {
  const [state, setState] = useState({
    name: "",
    task: "",
    description: "",
    date: fdate,
    department: "Build",
    isCompleted: false
  });

  const handleUserName = (event) => {
    setState({ ...state, name: event.target.value });
  };
  const handletask = (event) => {
    setState({ ...state, task: event.target.value });
  };
  const handledescription = (event) => {
    setState({ ...state, description: event.target.value });
  };
  const handledepartment = (event) => {
    setState({ ...state, department: event.target.value });
  };
  const handledate = (event) => {
    setState({ ...state, date: event.target.value });
  };
  const handleForm = async (event) => {
    event.preventDefault();
    let { name, task,isCompleted ,date, description, department } = state;
    let user = {
      name,
      task,
      description,
      department,
      date,
      isCompleted
    };
    setState({
      name: "",
      task: "",
      description: "",
      date: fdate,
      department: "HTML&CSS",
      isCompleted: false
    });
    console.log(user);
    await fetch("http://localhost:8000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    navigate("/table");
  };
  let navigate = useNavigate();
  return (
    <div className="wrap">
      <form onSubmit={handleForm} className="form">
        <h1 className="Mor">
          Mor<span id="MorTasks">Tasks</span>
        </h1>
        <div className="align">
          <p className="lol">
            <label htmlFor="">Name:</label>
            <input
            id="hi"
              placeholder="Name"
              onChange={handleUserName}
              type="text"
              value={state.name}
            />
          </p>
          <p className="lol">
            <label htmlFor="">Task:</label>
            <input
            id="hi"
              placeholder="Task"
              type="text"
              onChange={handletask}
              value={state.task}
            />
          </p>
        </div>
        <div className="align"> 
          <p className="lol">
            <label htmlFor="">Due Date:</label>
            <input
              placeholder="Today's date"
              onChange={handledate}
              type="date"
              value={state.date}
            />
          </p>
          <p className="lol">
            <label htmlFor="">Department:</label>
            <select onChange={handledepartment}>
              <option className="options" value="Build">
                Build
              </option>
              <option className="options" value="Electric">
                Electric
              </option>
              <option className="options" value="Programming">
                Programming
              </option>
              <option className="options" value="CAD">
                CAD
              </option>
            </select>
          </p>
        </div>
        <p className="lol">
            <label htmlFor="">Description:</label>
            <textarea className="describe"
              placeholder="Description..."
              onChange={handledescription}
              value={state.description}
            />
        </p>
        

        <button type="submit"> <img src={send} alt="" /> Send</button>
      </form>
    </div>
  );
};
export default UserForm;
