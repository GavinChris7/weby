import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/* 4 
const element = <h1 className="testClass">Welcome to React Programming...</h1>;

ReactDOM.render(element, document.getElementById("root"));

const newElement = (
  <h1 className="testClass">Understanding React Programming</h1>
);

ReactDOM.render(newElement, document.getElementById("app"));

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const element = (
  <div className="testClass">
    <h1>Welcome to react programming...</h1>
    <h1>Understanding the Creation of React Elements..</h1>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

const element = React.createElement(
  "h1",
  null,
  "Welcome To React Programming World..."
);

ReactDOM.render(element, document.getElementById("root"));



const element = React.createElement(
  "div",
  { className: "testClass" },
  React.createElement("h1", null, "Welcome To React Programming World..."),
  React.createElement(
    "h1",
    null,
    "Understanding the Creation of React Elements.."
  )
);

ReactDOM.render(element, document.getElementById("root"));



function DisplayEmployeeInfo(employee) {
  return (
    <div>
      <p>
        <label>
          Employee ID: <b>{employee.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee ID: <b>{employee.Name}</b>
        </label>
      </p>
      <p>
        <label>
          Employee ID: <b>{employee.Location}</b>
        </label>
      </p>
      <p>
        <label>
          Employee ID: <b>{employee.Salary}</b>
        </label>
      </p>
    </div>
  );
}

const element = (
  <DisplayEmployeeInfo
    Id="101"
    Name="Pragim"
    Location="Bangalore"
    Salary="12345"
  ></DisplayEmployeeInfo>
);

ReactDOM.render(element, document.getElementById("root"));

*/

/* 5
var DisplayEmployeeInfo = (employee) => {
  return (
    <div>
      <h1>Employee Details :</h1>
      <p>
        <label>
          Employee ID: <b>{employee.Id}</b>
        </label>
      </p>
      <p>
        <label>
          Employee ID: <b>{employee.Name}</b>
        </label>
      </p>
      <p>
        <label>
          Employee ID: <b>{employee.Location}</b>
        </label>
      </p>
      <p>
        <label>
          Employee ID: <b>{employee.Salary}</b>
        </label>
      </p>

      <Department
        deptName={employee.deptName}
        headName={employee.headName}
      ></Department>
    </div>
  );
};

const Department = (deptInfo) => {
  return (
    <div>
      <p>
        Dept Name is : <b>{deptInfo.deptName}</b>
      </p>
      <p>
        Dept Head is : <b>{deptInfo.headName}</b>
      </p>
    </div>
  );
};

const element = (
  <DisplayEmployeeInfo
    Id="101"
    Name="Pragim"
    Location="Bangalore"
    Salary="50,000"
    deptName="UI Dev"
    headName="TechInfo"
  ></DisplayEmployeeInfo>
);

ReactDOM.render(element, document.getElementById("root"));
*/

/* 5.1 

class Employee extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h2>Employee Details : </h2>
        <p>
          <label>
            Employee ID : <b>{this.props.Id}</b>
          </label>
        </p>
        <p>
          <label>
            Employee ID : <b>{this.props.Name}</b>
          </label>
        </p>
        <p>
          <label>
            Employee ID : <b>{this.props.Location}</b>
          </label>
        </p>
        <p>
          <label>
            Employee ID : <b>{this.props.Salary}</b>
          </label>
        </p>
        <Department
          DeptName={this.props.DeptName}
          HeadName={this.props.HeadName}
        ></Department>
      </div>
    );
  }
}

class Department extends React.Component {
  render() {
    return (
      <div>
        <h2>Department Details : </h2>
        <p>
          <label>
            Dept Name : <b>{this.props.DeptName}</b>
          </label>
        </p>
        <p>
          <label>
            Head Name : <b>{this.props.HeadName}</b>
          </label>
        </p>
      </div>
    );
  }
}

const element = (
  <Employee
    Id="201"
    Name="Pragim"
    Location="Bangalore"
    Salary="50,000"
    DeptName="UI Dev"
    HeadName="Pragim Tech"
  ></Employee>
);

ReactDOM.render(element, document.getElementById("root"));


*/
