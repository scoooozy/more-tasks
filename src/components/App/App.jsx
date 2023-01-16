import { Component } from "react";
import React from "react";
import "./App.css";
import Menu from "../Menu/Menu";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isForm: true,
    };
  }



  render() {
    return (
      <Menu/>
    )
    

  }
}

export default App;
