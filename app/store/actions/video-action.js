
import {
    ADD_VIDEO_SUCCESS,
    DELETE_VIDEO,
} from '../constants/video-types';

export const addVideo = (dispatch) => (video) => {
    dispatch({
        type: ADD_VIDEO_SUCCESS,
        payload: video,
    });
};

export const deleteVideo = (dispatch) => (id) => {
    dispatch({
        type: DELETE_VIDEO,
        payload: id,
    })
};