import React from 'react';
import { connect } from 'react-redux';
import BasicInfo from './basic-info';
import races from '../../data/races.json';

class CharacterCreation extends React.Component {

  onChange = (event) => {
    this.setState({ char: { name: event.nativeEvent.target.value } })
  }

  render() {
    return (
      <div>
        <BasicInfo races={races} />
      </div>
    )
  }
}

export default connect(state => ({ login: state.app.login }))(CharacterCreation)
