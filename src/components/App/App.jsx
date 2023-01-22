import React from 'react';
import Menu from "../Menu/Menu"
import UserForm from '../UserForm/UserForm';
import UserTable from '../UserTable/UserTable';
// import CompletedTable from 'components/Completed/Completed';
// @ts-ignore
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(){
    return(
        <Router>
          <Routes>
            <Route path="/" 
// @ts-ignore
            element={<Menu/>}/> 
            <Route path="/form" 
// @ts-ignore
            element={<UserForm/>}/> 
            <Route path="/table" 
// @ts-ignore
            element={<UserTable handleButton={()=>{}}/>}/> 
            {/* <Route path="/completed" 
// @ts-ignore
            element={<CompletedTable handleButton={()=>{}}/>}/>  */}
          </Routes>
        </Router>

    )
}
export default App
