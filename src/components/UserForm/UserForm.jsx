import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./Userform.css"

const UserForm = (props) => {
  const [state, setState] = useState({
    name: "",
    task: "",
    description: "",
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
  const handleForm =  async (event) => {
    event.preventDefault();
    let { name, task, description, department } = state;
    let user = {
      name,
      task,
      description,
      department,
    };
    setState({
      name: "",
      task: "",
      description: "",
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
        <h1>MorTasks</h1>
        <p className="spacing">
          <label htmlFor="">Name:</label>
          <input placeholder="Name" onChange={handleUserName} type="text" value={state.name} />
        </p>
        <p className="spacing">
          <label htmlFor="">task:</label>
          <input placeholder="Task" type="text" onChange={handletask} value={state.task} />
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
          <label htmlFor="">department:</label>
          <select onChange={handledepartment}>
            <option value="Build">Build</option>
            <option value="Electric">Electric</option>
            <option value="Programming">Programming</option>
            <option value="CAD">CAD</option>
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
