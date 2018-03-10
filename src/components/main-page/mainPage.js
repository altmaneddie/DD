import React from 'react';
import Register from '/register.js';
import Login from '/login.js';


export default class Register extends React.Component {

    render(){
        return (
        <div className= "wrapper">
           <div className={`left-wrapper`}></div>
           <div className={`right-wrapper`}>
           <Register/>
           <Login/>
           </div>
        </div>
        )
    }
}