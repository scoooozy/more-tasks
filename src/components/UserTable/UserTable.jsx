import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function TaskTable({ handleButton }) {
  let navigate = useNavigate();

  let [tasks, setTasks] = useState([]);
  useEffect(() => {
    let gettask = async () => {
      let response = await fetch("http://localhost:8000/task");
      let data = await response.json();
      setTasks(data);
    };
    gettask();
  }, []);
  function refreshPage(){
    window.location.reload()
  }
  async function remove(task) {
    await fetch(
      "http://localhost:8000/task",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: task.id }),
      }
    );
    refreshPage()
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>task:</th>
            <th>description:</th>
            <th>department:</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr>
                <td>{task.name}</td>
                <td>{task.task}</td>
                <td>{task.description}</td>
                <td>{task.department}</td>
                <td>
                  <button className="remove" onClick={() => remove(task) }>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default TaskTable;
