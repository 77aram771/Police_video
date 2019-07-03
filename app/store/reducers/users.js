import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAILURE,
    REGiSTER_REQUEST_SUCCESS,
    FORGOT_REQUEST_SUCCESS,
    CONFIRM_REQUEST_SUCCESS,
    RESET_REQUEST_SUCCESS,
    EXIT
} from '../constants/users';


const initialState = {
    isloading: false,
    loaded: false,
    data: {},
    error: "",
    login: true,
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, ...{ isloading: true, error: "", } }
        case LOGIN_REQUEST_SUCCESS:
            return { ...state, ...{ isloading: false, loaded: true, login: false, main: true }, data: action.payload }
        case LOGIN_REQUEST_FAILURE:
            return { ...state, ...{ error: action.payload, isloading: false } }

        case REGiSTER_REQUEST_SUCCESS:
            return { ...state, ...{ isloading: false, loaded: true, signUp: false, main: true }, data: action.payload }

        case 'TO_LOGIN':
            return { ...state, ...{ email: false, login: true, signUp: false } };

        case 'TO_SIGNUP':
            return { ...state, ...{ login: false, signUp: true } };

        case 'TO_RESET':
            return { ...state, ...{ login: false, email: true } };

            case FORGOT_REQUEST_SUCCESS:
            return { ...state, ...{isloading: false, loaded: true, email: false, confirm: true }, data: action.payload }

            case CONFIRM_REQUEST_SUCCESS:
            return { ...state, ...{isloading: false, loaded: true, confirm: false, reset: true }, data: action.payload}

            case RESET_REQUEST_SUCCESS:
                return { ...state, ...{ isloading: false, loaded: true, reset: false, login: false, main: true }, data: action.payload }

        case EXIT:
            return initialState;

        default:
            return state
    }
}