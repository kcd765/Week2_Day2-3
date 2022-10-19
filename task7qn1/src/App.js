import React, { Component } from 'react';
import './App.css';
import Employee from './data/employee'
import Modal from './modal/Modal';

class App extends Component {

  state = {
    empId: "",
    display: false
  }

  displayModal = (id) => {
    this.setState({
      empId: id,
      display: true
    })
  }

  hideModal = () => {
    this.setState({
      display: false
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Qn1</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {Employee.map(e => {
              return (
                <tr key={e.id}>
                  <td onMouseOver={() => this.displayModal(e.id)}>{e.name}</td>
                  <td><img src={e.image} alt='person' /></td>
                  <td>{e.designation}</td>
                </tr>
              )
            }
            )}
          </tbody>
        </table>

        {this.state.display && <Modal hideModal={this.hideModal} display={this.state.display} takeId={this.state.empId} />}
      </div>


    );
  }
}

export default App;