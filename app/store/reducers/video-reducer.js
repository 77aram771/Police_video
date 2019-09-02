import cloneDeep from 'lodash.clonedeep';

import {
    ADD_VIDEO_SUCCESS,
    DELETE_VIDEO,
} from '../constants/video-types';

const videoReducer = (store = {}, action) => {
    switch (action.type) {
        case ADD_VIDEO_SUCCESS: {
            if (action.payload.id) {
                return ({
                    ...store,
                    [action.payload.id]: { ...action.payload },
                });
            }

            return store;
        }
        case DELETE_VIDEO: {
            const newStore = cloneDeep(store);
            if (newStore[action.payload]) {
                delete newStore[action.payload];
            }

            return newStore;
        }
        default: {
            return store;
        }
    }
};

export default videoReducer;