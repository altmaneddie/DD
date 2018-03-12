import React from 'react';

import Register from './register';
import Login from './login';


export default class MainPage extends React.Component {

    render(){
        return (
        <div className="wrapper">
           <div className={`left-wrapper`}>Stuff in the left</div>
           <div className={`right-wrapper`}>
           <Register/>
           <Login/>
           </div>
        </div>
        )
    }
}