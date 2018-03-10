import React from 'react';
import Login from '/'

export default class Login extends React.Component {
    render() {
        return (
            <div className="header-wrapper">
                <input type="text" className="input" />
                <input type="password" className="input" />
                <button>Log In!</button>
            </div>
        )
    }
}