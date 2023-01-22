import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./Userform.css"
let date = new Date();
let fdate = date.toISOString().substring(0, 10);

const UserForm = (props) => {
  const [state, setState] = useState({
    name: "",
    task: "",
    description: "",
    date:fdate,
    department: "Build",
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
  const handleForm =  async (event) => {
    event.preventDefault();
    let { name, task, date,description, department } = state;
    let user = {
      name,
      task,
      description,
      department,
      date
    };
    setState({
      name: "",
      task: "",
      description: "",
      date:fdate,
      department: "HTML&CSS",
    });
    console.log(user)
    await fetch("http://localhost:8000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })

    navigate("/table");
  };
  let navigate = useNavigate();
  return (
    <div className="wrap">
      <form onSubmit={handleForm} className="form" >
        <h1>Mor<span id="MorTasks">Tasks</span></h1>
        <p className="spacing">
          <label htmlFor="">Name:</label>
          <input placeholder="Name" onChange={handleUserName} type="text" value={state.name} />
        </p>
        <p className="spacing">
          <label htmlFor="">Task:</label>
          <input placeholder="Task" type="text" onChange={handletask} value={state.task} />
        </p>
        <p className="spacing">
          <label htmlFor="">Due Date:</label>
          <input placeholder="Today's date"
            onChange={handledate}
            type="date"
            value={state.date}
          />
        </p>
        <p className="spacing">
          <label htmlFor="">Description:</label>
          <input placeholder="Description"
            onChange={handledescription}
            type="text"
            value={state.description}
          />
        </p>

        <p className="spacing">
          <label htmlFor="">Department:</label>
          <select onChange={handledepartment}>
            <option className="options" value="Build">Build</option>
            <option className="options" value="Electric">Electric</option>
            <option className="options" value="Programming">Programming</option>
            <option className="options" value="CAD">CAD</option>
          </select>
        </p>
        <button
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default UserForm;
