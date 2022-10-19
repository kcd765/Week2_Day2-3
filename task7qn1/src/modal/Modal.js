import React from 'react'
import './modal.css'
import Employee from '../data/employee'

const Modal = ({ hideModal, display, takeId }) => {
    const showHideClassName = display ? "modal display-block" : "modal display-none"

    const filter = Employee.filter(e => {
        return e.id === takeId
    })

    return (
        <div id="myModal" className={showHideClassName}>
            <div className="modal-content">
                <span className="close" onClick={hideModal}>&times;</span>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Date of Birth</th>
                            <th>Salary</th>
                            <th>Designation</th>
                            <th>Image</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filter.map(e => {
                            return (
                                <tr key={e.id}>
                                    <td>{e.name}</td>
                                    <td>{e.age}</td>
                                    <td>{e.dob}</td>
                                    <td>${e.salary}</td>
                                    <td>{e.designation}</td>
                                    <td><img src={e.image} alt='person' /></td>
                                    <td>{e.department}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Modal