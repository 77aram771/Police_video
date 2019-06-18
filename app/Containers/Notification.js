import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotificationPage from '../Components/NotificationPage'


class Notification extends Component {
  render() {
    return (
      <NotificationPage/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Notification)