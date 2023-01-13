import "./Main.css"
import React from "react"

class Main extends React.Component {
    constructor() {
      super();
      this.state = {
        task:"string",
        description:"string",
        urgent:"boolean",
        members:"int",
        startDate:"int",
        finishDate:"int",
        robotFinished:"28 days"
      }
  }
  get getInput() {
    let firstName = document.querySelector(".firstName").value
    console.log(firstName)
  }

    render() {
      return(
        <div>
          <h2>This is when robot is supposed to be done {this.state.robotFinished} </h2>
          <label htmlFor="">First name</label>
          <input type="text" className="firstName" />
          <button onClick={getInput()}></button>
        </div>
      ) 
    }
  }
  export default Main;