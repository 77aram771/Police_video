import React, {Component} from 'react';
import {connect} from 'react-redux';
import MyVideosPage from '../Components/MyVideosPage';
import * as axios from 'axios';


class MyVideos extends Component {

    state = {
        Video: []
    };

    componentDidMount() {
        axios.get(`http://128.199.247.46:3600/records/${this.props.user.data.user._id}`)
            .then(res => {
                const Video = res.data;
                this.setState({Video});
                console.log(this.state.Video)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


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
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyVideos)