import React from 'react';
import ReactDOM from 'react-dom';
import data from './data/db.json';

function Employee(props) {
  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>{props.employee.firstname}</td>
      <td>{props.employee.lastname}</td>
      <td>{props.employee.department}</td>
    </tr>
  );
}


class EmployeesData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      originalData: data,
      employees: data
    }
  }

  sortByFirstName() {
    let employeesCopy = this.state.employees.slice();
    employeesCopy.sort((firstEmployee, secondEmployee) => {
      return firstEmployee.firstname.localeCompare(secondEmployee.firstname);
    });
    this.setState({ employees: employeesCopy });
  }

  filterByFirstName(event) {
    let employeesCopy = this.state.originalData.slice();
    let filteredEmployees = employeesCopy.filter(employee =>
      employee.firstname.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));

    this.setState({ employees: filteredEmployees });
  }

  filterByLastName(event) {
    let employeesCopy = this.state.originalData.slice();
    let filteredEmployees = employeesCopy.filter(employee =>
      employee.lastname.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));

    this.setState({ employees: filteredEmployees });
  }

  filterBydepartment(event) {
    let employeesCopy = this.state.originalData.slice();
    let filteredEmployees = employeesCopy.filter(employee =>
      employee.department.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));

    this.setState({ employees: filteredEmployees });
  }

  render() {
    return (
      <div className='row'>
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"><button onClick={() => this.sortByFirstName()}>First</button></th>
                <th scope="col">Last</th>
                <th scope="col">Department</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td><input type="text" id="fname" name="fname" onChange={(event) => this.filterByFirstName(event)} /></td>
                <td><input type="text" id="fname" name="fname" onChange={(event) => this.filterByLastName(event)} /></td>
                <td><input type="text" id="fname" name="fname" onChange={(event) => this.filterBydepartment(event)} /></td>
              </tr>
              {this.state.employees.map((employee, index) => (
                <Employee key={index} index={index} employee={employee} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <EmployeesData />,
  document.getElementById('maincontainer')
);
