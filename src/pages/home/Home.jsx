import React, { useState } from 'react'
import "./home.scss"
import { Link } from 'react-router-dom'
import Employees from '../employees/Employees'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
    const [startDate, setStartDate] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to={'employees'} >View Current Employees</Link>
                <h2>Create Employee</h2>
                <form id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    {/* <input id="date-of-birth" type="text" /> */}
                    <DatePicker id="date-of-birth" selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)} />

                    <label htmlFor="start-date">Start Date</label>
                    {/*<input id="start-date" type="text" /> */}
                    <DatePicker id="start-date"selected={startDate} onChange={(date) => setStartDate(date)} />


                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state"></select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </form>

                <button type='submit'>Save</button>
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </>
    )
}

export default Home