import React from 'react';
import './short-login.css';

export default class LoginShort extends React.Component {
    render() {
        return (
            <div className="short-login-header">
                <form className="short-login-form">
                    <div className="short-login-form-item-wrappper">
                        <label className="short-login-form-item">
                            Username:
                            <input type="text" name="name" />
                        </label>
                    </div>
                    <div className="short-login-form-item-wrappper">
                        <label className="short-login-form-item">
                            Password:
                            <input type="password" name="password" />
                        </label>
                    </div>
                        <input className="short-login-form-submit" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}