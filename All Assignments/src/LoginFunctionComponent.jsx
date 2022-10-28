import React from 'react';

function FunctionClassComponent() {
   
        return(
            <div>
            <h3>Sign up Now from Function Component</h3>
            <p>Get access to your orders and chat for support</p>
            <form className='form-fields'>
            <div className='text-inputs'>
            <input type='text' placeholder='Enter your name' />
            <input type='text' placeholder='Enter your password' />
            </div>
            <div class='signin-elements'>
                <button type='button' style={{ backgroundColor: 'green', color: 'white',border: 'green',padding: '10px' }}>Sign in</button>
                <a href='www' className='terms'>Terms and conditions</a>
            </div>
            </form>
            </div>
        )
}

export default FunctionClassComponent;