import React from 'react';

export default class Register extends React.Component {
  render() {
    return (
      <div className="login-header">
        <p>Want an account?</p>
        <p>Register!</p>
        <ul>Chose a payment plan
          <li>2$/month</li>
          <li>12$/year</li>
        </ul>
      </div>
    )
  }
}