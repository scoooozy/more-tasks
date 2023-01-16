import "./Menu.css";
import { Component } from "react";
import React from "react";
import UserForm from "../UserForm/UserForm";
import UserTable from "../UserTable/UserTable";


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isForm: true,
      isMenu: false,
    };
  }
  handleAddUser = (user) => {
    this.setState((prevState) => {
      return {
        users: [...prevState.users, user],

      };
    });
  };
  handleButton = () => {
    this.setState({ isForm: true });
  };

  render() {
    return (
      <nav class="sidenav">
        <ul class="main-buttons">
          <li className="hdr">
            morteam<span className="dot">.</span>
          </li>
          <li>
            <button
              onClick={() => {
                this.setState({ isMenu: false });

                console.log(this.state.isMenu)
                let { isForm, users, isMenu } = this.state;
                if (isMenu == false) {
                  if (isForm) {
                    return <UserForm handleAddUser={this.handleAddUser} />;
                  } else {
                    return <UserTable users={users} handleButton={this.handleButton} />;
                  }
                }
              }}
            >
              Add Task
            </button>
          </li>
          <li>
            <button style={{ color: "white", textdecoration: "none" }}>
              View Tasks
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
