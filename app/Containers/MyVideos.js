import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyVideosPage from '../Components/MyVideosPage';
import axiso from 'axios';


const urlVideo = `http://128.199.247.46:3600/records/user${this.props.user.data.user._id}`;

class MyVideos extends Component {
    componentDidMount = () => {

    };

    render() {
        return (
            <MyVideosPage video={url}/>
        );
    }
}

mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyVideos)