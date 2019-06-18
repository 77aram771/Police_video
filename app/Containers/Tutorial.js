import React, { Component } from 'react';
import { connect } from 'react-redux';
import TutorialPage from '../Components/TutorialPage'


class Tutorial extends Component {
  render() {
    return (
      <TutorialPage/>
    );
  }
}

mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tutorial)