import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const NewLogin = () => {
    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [success,setSuccess] = useState('')
    const [error,setError]= useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        if(username===""||password==="") {
            setError("Enter username and password")
            setSuccess("")
        }
        else {
            setSuccess("Login successful")
            setError("")
        }
        if(firstname==='' ||lastname===''||username===''||password==='' ) {
            alert('Enter inout fields');
        }
    }
  return (
    <>
      <div className="container-dd">
          <h2>Registration form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              value={firstname}
              onChange={(event)=>setFirstName(event.target.value)}
              className="form-control"
              placeholder="Enter Firstname"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="name"
              value={lastname}
              onChange={(event)=>setLastName(event.target.value)}
              className="form-control"
              placeholder="Enter Lastname"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="name"
              value={username}
              onChange={(event)=>setUsername(event.target.value)}
              className="form-control"
              placeholder="Enter Email address"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="pwd"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
          {success?<div className="text-success">{success}</div>:null}
          {error?<div className="text-danger">{error}</div>:null}
          <div>
        {username?<div className="text-success">First name entered is {firstname}</div>:null}
          {password?<div className="text-danger">Last name entered is{lastname}</div>:null}
          {username?<div className="text-success">Username entered is {username}</div>:null}
          {password?<div className="text-danger">{password}</div>:null}
        </div>
        </form>
        
      </div>
    </>
  );
};
export default NewLogin;