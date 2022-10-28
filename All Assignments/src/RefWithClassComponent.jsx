import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class RefWithClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { firstname:'',lastname: '',name: '', password: ''}
        this.nameRef = React.createRef()
        this.pwdRef = React.createRef()
        this.firstnameRef = React.createRef()
        this.lastnameRef = React.createRef()
    }
    handleLogin = (e) => {
        e.preventDefault();
        if(this.nameRef.current.value==="" && this.pwdRef.current.value==="") {
            alert("Please enter username and password")
        }else if(this.nameRef.current.value===""){
            alert("Please enter username")
        }else if(this.pwdRef.current.value===""){
            alert("Please enter password")
        }else{
        alert("Welcome " + this.nameRef.current.value);
        }
    }
    render() {
        return(<React.Fragment>
            <form>
                <div className="form-group">
                    <input style={{width:'40%'}} type="text" className="form-control" id="name" placeholder="Enter FirstName" name="firstname" ref={this.nameRef}/>
                </div>
                <div className="form-group">
                    <input style={{width:'40%'}} type="password" className="form-control" id="password" placeholder="Enter Lastname" name="lastname" ref={this.pwdRef} />
                </div>
                <div className="form-group">
                    <input style={{width:'40%'}} type="text" className="form-control" id="name" placeholder="Enter email address" name="name" ref={this.nameRef}/>
                </div>
                <div className="form-group">
                    <input style={{width:'40%'}} type="password" className="form-control" id="password" placeholder="Enter password" name="password" ref={this.pwdRef} />
                </div>
               <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
           </form>
        </React.Fragment>)
    }
}
export default RefWithClassComponent;

