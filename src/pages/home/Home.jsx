import React, { useState } from 'react'
import "./home.scss"
import { Link, useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-dropdown-select';
import { states } from '../../data/states';
import { departmentOptions } from '../../data/departments';
import { useDispatch } from 'react-redux';
import { setEmplyees } from '../../redux/employeeSlice';
import MgModal from 'mg_modal';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState([]);
    const [zip, setZip] = useState(0);
    const [department, setDepartment] = useState([]);

    // Show hide modal that contain success message on employee create
    const [showModal, setShowModal] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        const employee = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth.toISOString(),
            startDate: startDate.toISOString(),
            street: street,
            city: city,
            state: state[0].label,
            zip: zip,
            department: department[0].label,
        };

        // save in store
        dispatch(setEmplyees(employee));
        setShowModal(true);
    }

    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to={'employees'} >View Current Employees</Link>
                <h2>Create Employee</h2>
                <form id="create-employee" onSubmit={submitForm}>
                    <label htmlFor="first-name">First Name</label>
                    <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input required value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="last-name" />

                    <label htmlFor="date-of-birth" id="dob-label">Date of Birth</label>
                    <DatePicker 
                        required 
                        id="date-of-birth" 
                        selected={dateOfBirth} 
                        onChange={(date) => setDateOfBirth(date)}
                        aria-labelledby="dob-label"
                    />

                    <label htmlFor="start-date" id="start-date-label">Start Date</label>
                    <DatePicker 
                        required 
                        id="start-date" 
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)}
                        aria-labelledby="start-date-label"
                    />


                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input value={street} onChange={(e) => setStreet(e.target.value)} required id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input value={city} onChange={(e) => setCity(e.target.value)} required id="city" type="text" />

                        <label htmlFor="state" id="state-label">State
                            
                        <Select 
                            id="state"
                            name="state"
                            required
                            options={states}
                            values={state}
                            onChange={(value) => setState(value)}
                            aria-labelledby="state-label"
                        />
                        </label>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input value={zip} onChange={(e) => setZip(e.target.value)} required id="zip-code" type="number" min={0} />
                    </fieldset>

                    <label htmlFor="department" id="department-label">Department
                    <Select
                        required
                        options={departmentOptions}
                        values={department}
                        onChange={(value) => setDepartment(value)}
                        name="department"
                        id="department"
                        aria-labelledby="department-label"
                    /></label>
                    <button type='submit'>Save</button>
                </form>

            </div >

            <MgModal
                isOpen={showModal}
                setIsOpen={setShowModal}
                body="Employee Created!"
            />
        </>
    )
}

export default Home