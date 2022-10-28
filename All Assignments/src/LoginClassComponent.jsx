import React from 'react';

class LoginClassComponent extends React.Component {
    render() {
        return(
            <div style={{width: '500px'}}>
            <h3>Sign up Now Class Component</h3>
            <p>Get access to your orders and chat for support</p>
            <form class='form-fields' >
            <div className='text-inputs'>
            <input type='text' placeholder='Enter your name' />
            <input type='text' placeholder='Enter your password' />
            {this.props.name}
            </div>
            <div class='signin-elements'>
                <button type='button'style={{ backgroundColor: 'green', color: 'white',border: 'green',padding: '10px' }}>Sign in</button>
                <a href='www' className='terms'>Terms and conditions</a>
            </div>
            </form>
            </div>
        )
    }
}

export default LoginClassComponent;