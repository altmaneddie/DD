import React from 'react';
import { connect } from 'react-redux';
import Register from './register';
import News from './news';
import Premium from './premium';

class MainPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="main-wrapper row">
        <div className="col-lg-6">Stuff in the left</div>
        <div className="col-lg-6 row">
          <div className="col-lg-6">
            <Register />
            <News />
          </div>
          <div className="col-lg-6">
            <Premium />
          </div>
        </div>
      </div >
    )
  }
}

export default connect(state => ({ login: state.app.login }))(MainPage)

