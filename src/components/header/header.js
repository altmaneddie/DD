import React from 'react';
import Login from '../login/login.js';

export default class Header extends React.Component {
    render(){
        return (
            <div className= "header-wrapper">
                <span>Logo</span>
                <div><Login/></div>
            </div>
        )
    }
}