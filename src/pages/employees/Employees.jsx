import React, { useEffect, useState } from 'react'
import "./employees.scss"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { mockedEmployees } from '../../data/employees-mock';

// datatable columns settings
const columns = [
  { name: 'First Name', selector: row => row.firstName, sortable: true },
  { name: 'Last Name', selector: row => row.lastName, sortable: true },
  { name: 'Date of Birth', selector: row => row.dateOfBirth, sortable: true },
  { name: 'Start Date', selector: row => row.startDate, sortable: true },
  { name: 'Street', selector: row => row.street, sortable: true },
  { name: 'City', selector: row => row.city, sortable: true },
  { name: 'State', selector: row => row.state, sortable: true },
  { name: 'Zip Code', selector: row => row.zip, sortable: true },
  { name: 'Department', selector: row => row.department, sortable: true },
];

const Employees = () => {
  const [filterText, setFilterText] = useState('');
  const { employees } = useSelector((state) => state.employees);
  
  // combine mocked employees with the real ones from the store
  const combinedEmployees = [...employees, ...mockedEmployees];
  
  const filteredData = combinedEmployees.filter(
    item => 
      (item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.lastName && item.lastName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.dateOfBirth && item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.startDate && item.startDate.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.street && item.street.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.city && item.city.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.state && item.state.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.zip && item.zip.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.department && item.department.toLowerCase().includes(filterText.toLowerCase())) 
  );

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div className='table-container'>
        <div className='table-search'>
          <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={e => setFilterText(e.target.value)}
            style={{ marginBottom: '10px', padding: '5px' }}
          />
        </div>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          highlightOnHover
        />
      </div>
      <Link to={'/'} >Home</Link>
    </div>

  )
}

export default Employees