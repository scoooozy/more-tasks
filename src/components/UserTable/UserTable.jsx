import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./Usertable.css";
import removeIcon from "./trash-2.svg";
const leftPad = require('left-pad')
leftPad('haha',5 )
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
  function refreshPage() {
    window.location.reload();
  }
  async function remove(task) {
    await fetch("http://localhost:8000/task", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: task.id }),
    });
    refreshPage();
  }
  return (
    <div>
 <section className="page">
      <div className="task-part" >
        {users.map((user) => {
          return (
            <div className="card">
              <div className="goLeft">
                <button className="removebtn" onClick={() => remove(user)}>
                  <img src={removeIcon} alt="trash" />
                </button>
              </div>
              <div className="goUp">
              <div className="card-header">
                <h2 className="task-name">{user.task}</h2>
                <h4 className="sub-heading">Created by: {user.name}</h4>
              </div>
              <div className="content">
                <p>
                  Description: <br></br> {user.description}
                </p>
              </div>
              <div className="card-footer">
                <h4>Department: {user.department} </h4>
                
              </div>
            </div>
              </div>

          );
        })}
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </section>
    </div>
   

  );
}

export default UserTable;
