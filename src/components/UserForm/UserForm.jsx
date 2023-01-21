import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

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
  const handleForm = async (event) => {
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
    <div>
      <form onSubmit={handleForm}>
        <h1>Form-app</h1>
        <p>
          <label htmlFor="">Name</label>
          <input onChange={handleUserName} type="text" value={state.name} />
        </p>
        <p>
          <label htmlFor="">task</label>
          <input type="text" onChange={handletask} value={state.task} />
        </p>
        <p>
          <label htmlFor="">Description</label>
          <input
            onChange={handledescription}
            type="text"
            value={state.description}
          />
        </p>
        <p>
          <label htmlFor="">department</label>
          <select onChange={handledepartment}>
            <option value="Build">Build</option>
            <option value="Electric">Electric</option>
            <option value="Programming">Programming</option>
            <option value="CAD">CAD</option>
          </select>
        </p>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default UserForm;
