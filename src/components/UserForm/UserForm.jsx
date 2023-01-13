import React from "react";
function handleSubmit() { 
    var memberName = document.getElementById("funny").value;
    console.log(memberName+' funny')
}
class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    handleUserName = (event) => {
        this.setState({ name: event.target.value });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleUserName} type="text" id="funny" value={this.state.name} />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            
        );
    }
   
}
export default UserForm;
export var memberName;