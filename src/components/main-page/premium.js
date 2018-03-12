import React from 'react';
import './premium.css';
export default class Premium extends React.Component {

  render() {
    return (
      <div className="prem-wrapper">
      <h2>Caution!</h2>
      <p>Please take into account that all your character creation will not be saved if you do not have an account.</p>
      <h2>Premium Advantages:</h2>
        <ul>
          <li>Your data is saved and can be accesed from everywhere!</li>
          <li>Store up to 10 parties</li>
          <li>Store up to 15 additional characters</li>
          <li>Dice simulator</li>
        </ul>
      </div>
    )
  }
}

