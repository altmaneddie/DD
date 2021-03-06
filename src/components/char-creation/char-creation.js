import React from 'react';
import { connect } from 'react-redux';
import BasicInfo from './basic-info';
import races from '../../data/races.json';
import classes from '../../data/races.json';

class CharacterCreation extends React.Component {

  render() {
    // const checkoutProgress = this.props.checkout_progress;

    return (
      <div>
        <BasicInfo races={races} props={this.props.char.basic_info} />
        {(this.props.char.progress >= 1) && <charClass classes={classes} props={this.props.char.class_info} />}
      </div>
    )
  }
}

export default connect(state => ({ login: state.app.login, char: state.char_creation }))(CharacterCreation);