import React from 'react';
import { connect } from 'react-redux';


class BasicInfo extends React.Component {

  render() {
    return (
      <div>
        <p2>General Character Information</p2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="text-input" />
          <br />
          <select className="race-input" name="Races">
            {this.props.races.map(race => (
              <option value={race.name}>{race.name}</option>
            ))}

          </select>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ login: state.app.login }))(BasicInfo)
