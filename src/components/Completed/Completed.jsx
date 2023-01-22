import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./Completed.css";
import back from "./arrow-left.svg"
function CompletedTable({ handleButton }) {
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
        <div className="task-part">
          {users.map((user) => {
            return (
              <div className="card">
                <div className="card-header">
                  <div className="heading">
                    <h2 className="task-name">{user.task}</h2>
                  </div>
                  <hr />
                  <div className="sub-heading">
                    <h6 >Created by: {user.name}</h6>
                    <h6> Day due: {user.date}</h6>
                  </div>
                </div>
                <div className="content">
                  <p>
                    Description: <br></br> {user.description}
                  </p>
                </div>
                <div className="card-footer">
                  <h6>Department: {user.department} </h6>
                </div>
              </div>
            );
          })}
        </div>
        <button className="bigger"
          onClick={() => {
            navigate("/");
          }}
        >

          <img src={back} alt="" className="rotate" />
          <p>          Go Back</p>

        </button>
      </section>
    </div>
  );
}

export default CompletedTable;
