import React from 'react';
import { connect } from 'react-redux';


class BasicInfo extends React.Component {

  renderView() {
    <div>
      <ul>
        <li>{}</li>
      </ul>
    </div>
  }

  renderEdit() {
    return (
      <div>
        <h2>General Character Information</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="text-input" />
          <br />
          <label htmlFor="race"></label>
          <select className="race-input" name="Races">
            {this.props.races.races.map((race, i) => (
              <option key={i} value={race.name}>{race.name}</option>
            ))}
          </select>

          {this.props.char.active && this.props.char.basic_info.subrace &&
            <div>
              <label htmlFor="race"></label>
              <select className="race-input" name="Races">
                {this.props.races.subraces.map((subrace, i) => (
                  <option key={i} value={subrace.name}>{subrace.name} -> {subrace.traits}</option>
                ))}
              </select>
            </div>}

        </div>
      </div>
    )
  }

  render() {
    if (this.props.char.edit) {
      return this.renderEdit();
    } else {
      return this.renderView();
    }
  }
}

export default connect(state => ({ login: state.app.login, char: state.char_creation }))(BasicInfo)
