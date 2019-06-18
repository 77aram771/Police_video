import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfilePage from '../Components/ProfilePage'


class Profile extends Component {
  render() {
    return (
      <ProfilePage/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

