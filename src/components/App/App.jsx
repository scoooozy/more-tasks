import React from 'react';
import './App.css'
import Menu from "../Menu/Menu"
import UserForm from '../UserForm/UserForm';
import UserTable from '../UserTable/UserTable';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(){
    return(
        <Router>
          <Routes>
            <Route path="/" element={<Menu/>}/> 
            <Route path="/form" element={<UserForm/>}/> 
            <Route path="/table" element={<UserTable handleButton={()=>{}}/>}/> 
          </Routes>
        </Router>

    )
}
export default App
