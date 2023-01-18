import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function UserTable({ handleButton }) {
  let navigate = useNavigate();

  let [users, setUsers] = useState([])
  useEffect(() => {
    fetch("/",)
    .then(data => data.json())
    
  }, [])

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
        Go to Form
      </button>
    </div>
  );
}

export default UserTable;
