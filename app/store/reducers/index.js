import { combineReducers } from 'redux';
import user from './users'
import videoReducer from './video-reducer';

const reducers = combineReducers({
    user,
    video: videoReducer,
});

export default reducers