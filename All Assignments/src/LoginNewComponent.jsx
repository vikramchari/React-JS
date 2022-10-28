import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
class LoginNewComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {firstname: '',lastname: '',email: '', password: ''}
    }
    setEmpState = (e) => {
           const value = e.target.value;
           const field =  e.target.name;
           this.setState({[field]:value})
    }
    handleLogin = (e) => {
        e.preventDefault();
        if(this.state.firstname &&this.state.password) {
          return (this.state.firstname + '' + this.state.lastname)
        }
        if(this.state.firstname==='' || this.state.lastname===''|| this.state.email===''|| this.state.password==='' ) {
            alert('Enter inout fields');
        }
    }
    render() {
        return(<React.Fragment>
            <form class='container-dd'>
            <div className="form-group">
                    <input style={{width:'40%'}} type="text" className="form-control" value={this.state.firstname} id="firsrname" placeholder="Enter Firstname" name="firstname" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                    <input style={{width:'40%'}} type="text" className="form-control" value={this.state.lastname} id="lastname" placeholder="Enter Lastname" name="lastname" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                    <input style={{width:'40%'}} type="text" className="form-control" value={this.state.email} id="email" placeholder="Enter Emailaddress" name="email" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                    <input style={{width:'40%'}} type="password" className="form-control" value={this.state.password} id="pwd" placeholder="Enter Password" name="password" onChange={this.setEmpState} />
                </div>
               <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
               <div>
               {this.state.firstname?<div className="text-success">First name entered is {this.state.firstname}</div>:null}
               {this.state.lastname?<div className="text-danger">Last name entered is{this.state.lastname}</div>:null}
               </div>
               
           </form>
        </React.Fragment>)
    }
}
export default LoginNewComponent;