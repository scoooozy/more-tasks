import React from "react";
class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            task: "",
            description: "",
            department: "Build",
        }
    }

    handleUserName = (event) => {
        this.setState({ name: event.target.value });
    }
    handletask = (event) => {
        this.setState({task: event.target.value})
    }
    handledescription = (event) => {
        this.setState({description: event.target.value})
    }
    handledepartment = (event) => {
        this.setState({department: event.target.value})
    }
    handleForm = (event) => {
        event.preventDefault()
        let { name, task, description, department} = this.state
        let user = {
            name,
            task,
            description,
            department,
        }
        this.props.handleAddUser(user)
        this.setState({
                name: "",
                task: "",
                description: "",
                department: "HTML&CSS",
        })
    }

    render() {
        let { name, task, description} = this.state 
        return  <div>
            
        <form onSubmit={this.handleForm} action="">
            <h1>Form-app</h1>
            <p><label htmlFor="">Name</label><input onChange={this.handleUserName} type="text" value={name} /></p>
            <p><label htmlFor="">task</label><input type="text" onChange={this.handletask}  value={task} /></p>
            <p><label htmlFor="">Description</label><input onChange={this.handledescription} type="text" value={description}/></p>
            <p><label htmlFor="" >department</label>
                <select onChange={this.handledepartment}>
                <option value="Build">Build</option>
                    <option value="Electric">Electric</option>
                        <option value="Programming">Programming</option>
                        <option value="CAD">CAD</option>
            </select>
            </p>
            <button>Send</button>
        </form>
    </div>
    }
   
}
export default UserForm;