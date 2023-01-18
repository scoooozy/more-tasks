import { Component } from 'react'
import './App.css'
import UserForm from '../UserForm/UserForm'
import UserTable from "../UserTable/UserTable"
import { createBrowserRouter } from 'react-router-dom'
class App extends Component{
    constructor(props) {
        super(props)
        this.state = {  
            users: [],
            isForm: true,
            
        }
    }
   
    handleAddUser = (user) => {

        this.setState((prevState) => {
            return {
                users: [...prevState.users, user],
                isForm: false,
            }
        })
    }
    handleButton = () => {
        this.setState({isForm:true})
    }
    render() {
        let { isForm, users} = this.state 
        if (isForm) {
            return <UserForm handleAddUser={this.handleAddUser} />
        }
        else {
            return <UserTable users={users} handleButton={ this.handleButton} /> 
        }
            
 

    }
} 
export default App
