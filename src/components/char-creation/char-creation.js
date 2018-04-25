import React from 'react';
import { connect } from 'react-redux';


class CharacterCreation extends React.Component {
  render() {
    return (
      <div>
        <form>
          General Character Information
          <input type="text" placeholder="Character Name"></input>

        </form>
      </div>
    )
  }
}

export default connect(state => ({ login: state.app.login }))(CharacterCreation)
