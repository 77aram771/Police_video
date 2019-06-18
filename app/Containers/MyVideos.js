import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyVideosPage from '../Components/MyVideosPage'


class MyVideos extends Component {
  render() {
    return (
      <MyVideosPage/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyVideos)