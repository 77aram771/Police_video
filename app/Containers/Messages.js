import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessagesPage from '../Components/MessagesPage'


class Messages extends Component {
  render() {
    return (
      <MessagesPage/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Messages)