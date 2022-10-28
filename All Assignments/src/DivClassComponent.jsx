import React from 'react';

class DivClassComponent extends React.Component {

    render(){
        const mystyle ={
            backgroundColor:'black',
            color: 'white',
            fontWeight:'bold',
            marginBottom:'20px',
            paddingBottom: '30px',
            width: '400px',
            height: '100px',
            textAlign: 'center',
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
         }
        return(
         <div style={mystyle}>Content</div>
        )
    }

}

export default DivClassComponent;