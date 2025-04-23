import React from 'react'
import "./employees.scss"
import { Link } from 'react-router-dom'



const Employees = () => {
  return (
    <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display"></table>
        
        <Link to={'/'} >Home</Link>
    </div>
  )
}

export default Employees