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
    render() {
      return(
        <div>
                  <h2>This is when robot is supposed to be done {this.state.robotFinished} </h2>
        </div>
      ) 
    }
  }
  export default Main;