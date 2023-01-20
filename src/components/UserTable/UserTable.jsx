import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function UserTable({ handleButton }) {
  let navigate = useNavigate();

  let [users, setUsers] = useState([]);
  useEffect(() => {
    let getUser = async () => {
      let response = await fetch("http://localhost:8000/task");
      let data = await response.json();
      setUsers(data);
    };
    getUser();
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
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.task}</td>
                <td>{user.description}</td>
                <td>{user.department}</td>
                <td>
                  <button className="remove" onClick={() => remove(user) }>
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

export default UserTable;
