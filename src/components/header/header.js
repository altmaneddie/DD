import React from 'react';
import ShortLogin from '../login/short-login.js';
import './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-wrapper row">
                <span className="col-lg-3">Stuff</span>
                <span className="col-lg-4 offset-lg-1">Logo</span>
                <div className="col-lg-3 offset-lg-1"><ShortLogin /></div>
            </div>
        )
    }
}