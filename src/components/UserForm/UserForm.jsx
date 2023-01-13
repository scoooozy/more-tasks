import React from "react";
class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            brthDay: "",
            course: "HTML&CSS",
        }
    }
    handleUserName = (event) => {
        this.setState({ name: event.target.value })
        console.log(this.state.name)
    }
    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }
    handleBrthDay = (event) => {
        this.setState({brthDay: event.target.value})
    }
    handleCourse = (event) => {
        this.setState({course: event.target.value})
    }
    handleForm = (event) => {
        event.preventDefault()
        let { name, email, brthDay, course} = this.state
        let user = {
            name,
            email,
            brthDay,
            course,
        }
        this.props.handleAddUser(user)
        this.setState({
                name: "",
                email: "",
                brthDay: "",
                course: "HTML&CSS",
        })
    }
    render() {
        let { name, email, brthDay} = this.state 
        return  <div>
            
        <form onSubmit={this.handleForm} action="">
            <h1>Form-app</h1>
            <p><label htmlFor="">Name</label><input onChange={this.handleUserName} type="text" value={name} /></p>
            <p><label htmlFor="">email</label><input type="email" onChange={this.handleEmail}  value={email} /></p>
            <p><label htmlFor="">Birth Day</label><input onChange={this.handleBrthDay} type="date" value={brthDay}/></p>
            <p><label htmlFor="" >Course</label>
                <select onChange={this.handleCourse}>
                    <option value="HTML&CSS">HTML&CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Java">Java</option>
            </select>
            </p>
            <button>Send</button>
        </form>
    </div>
    }
}
export default UserForm;