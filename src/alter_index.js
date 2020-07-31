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

/*6
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from Chris!!
        </a>
      </header>
    </div>
  );
}

export default App;
*/

/*7
import React from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

class CountCharacters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      //counter: 10,
    };
  }

  onMessageChange(text) {
    this.setState({
      message: "Message has " + text.length + " number of Characters.",
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to Count Characters Component :</h2>
        <p>
          <label>
            {" "}
            Enter Messsage :{" "}
            <input
              type="text"
              onChange={(e) => this.onMessageChange(e.target.value)}
            ></input>{" "}
          </label>
        </p>
        <p>
          <label>{this.state.message}</label>
        </p>
        <p>
          <label>{this.state.counter}</label>
        </p>
      </div>
    );
  }
}
class Employee extends React.Component {
  state = { counter: 0 };
  addEmployee = () => {
    this.setState({ counter: this.state.counter + 1 });
    //this.counter = this.counter + 1;
    //alert("Adding a New Employee");
    //alert("Add Employee Nutton is Clicked " + this.counter + " times");
  };
  render() {
    return (
      <div>
        <h2>Welcome to Employee Component :</h2>
        <p>
          <button onClick={this.addEmployee}>Add Employee</button>
        </p>
        <p>
          <label>
            Add Employee Button is Clicked <b>{this.state.counter}</b> times.
          </label>
        </p>
      </div>
    );
  }
}

const element = <CountCharacters></CountCharacters>; //<Employee></Employee>;

ReactDOM.render(element, document.getElementById("root"));

*/
