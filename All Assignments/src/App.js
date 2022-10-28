
import AddEmployee from './AddEmployee';
import './App.css';
import CounterComponent from './CounterComponent';
import EmployeeTableComponent from './EmployeeTableComponent';
import LoginNewComponent from './LoginNewComponent';
import NewLogin from './NewLogin';
import RefWithClassComponent from './RefWithClassComponent';
import RefWithFunctionalComponent from './RefWithFunctionalComponent'
import StopWatchComponent from './StopWatchComponent';
import DivClassComponent from './DivClassComponent';
import LoginClassComponent from './LoginClassComponent';
import FunctionClassComponent from './LoginFunctionComponent';
import TableClassComponent from './TableClassComponent';
import TableComponent from './TableComponent';
function App() {
  const employees = [
    {Id:101,Name:'Abhinav',Location:'Bangalore',Salary:12345},

  {Id:102,Name:'Abhishek',Location:'Chennai',Salary:23456},

  {Id:103,Name:'Ajay',Location:'Bangalore',Salary:34567}
  ]
  return (
    <div>
    <LoginClassComponent name='Using class Component Guys'/>
    <FunctionClassComponent />
    <TableComponent />
    <TableClassComponent />
    <DivClassComponent /> 
    <StopWatchComponent />
    <EmployeeTableComponent />
    <LoginNewComponent />
    <NewLogin />
    <RefWithFunctionalComponent />
    <RefWithClassComponent />
   <AddEmployee />
    <CounterComponent employees={employees} />
    </div>
  );
}

export default App;
