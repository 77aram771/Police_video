import React, { Component } from 'react';
import { connect } from 'react-redux';
import LegalDetailsPage from '../Components/LegalDetailsPage'


class LegalDetails extends Component {
  render() {
    return (
      <LegalDetailsPage/>
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

export default connect(mapStateToProps, mapDispatchToProps)(LegalDetails)