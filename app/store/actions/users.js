import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
  REGiSTER_REQUEST,
  REGiSTER_REQUEST_SUCCESS,
  REGiSTER_REQUEST_FAILURE,
  FORGOT_REQUEST_SUCCESS,
  CONFIRM_REQUEST_SUCCESS,
  RESET_REQUEST_SUCCESS,
  EXIT
} from '../constants/users';
import { Toast } from 'native-base';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

import Config from '../../Configs/Config';

showMsg = (text) => {
  Toast.show({
    text: text,
    buttonText: "Okay",
    position: 'center',
    duration: 5000
  })
}





export function onLogIn (dispatch, data) {
  console.log('data', Config.URI, data)
  // dispatch({ type: LOGIN_REQUEST })
    axios.post(`${Config.URI}login`, data)
    .then((response) => {
      dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: response.data })
    }).catch((err) => {
      console.log('err', err)
      showMsg(err.response.data.msg)
    })
}

export function onSignUp (dispatch, data) {
  console.log('data', Config.URI, data)
  // dispatch({ type: LOGIN_REQUEST })
  console.log('--------------')
    axios.post(`${Config.URI}signup`, data)
    .then((response) => {
      dispatch({ type: REGiSTER_REQUEST_SUCCESS, payload: response.data })
    }).catch((err) => {
      console.log('err', err)
      showMsg(err.response.data.msg)
    })
}

export function onForgotPassword (dispatch, data) {
  console.log('data', Config.URI, data)
  console.log('==================')
    axios.post(`${Config.URI}forgot`, data)
    .then((response) => {
      console.log('res', response.data)
      dispatch({ type: FORGOT_REQUEST_SUCCESS, payload: response.data })
    }).catch((err) => {
      console.log('err', err)
      showMsg(err.response.data.msg)
    })
}

export function onConfirmCode (dispatch, token, data) {
  console.log('action', token)
  console.log('----------------')
    axios.post(`${Config.URI}confirm`, data, { headers: { "Authorization": `Bearer ${token}` } })
    .then((response) => {
      dispatch({ type: CONFIRM_REQUEST_SUCCESS, payload: response.data })
    }).catch((err) => {
      console.log('err', err)
      showMsg(err.response.data.msg)
    })
}

export function onResetPassword (dispatch, token, data) {
  console.log('action', token)
  console.log('++++++++')
    axios.post(`${Config.URI}reset`, data, { headers: { "Authorization": `Bearer ${token}` } })
    .then((response) => {
      dispatch({ type: RESET_REQUEST_SUCCESS, payload: response.data })
    }).catch((err) => {
      console.log('err', err)
      showMsg(err.response.data.msg)
    })
}

export function toLogin (dispatch) {
  console.log('action upload')
  dispatch({ type: 'TO_LOGIN' })
}

export function toSignUp (dispatch) {
  console.log('action upload')
  dispatch({ type: 'TO_SIGNUP' })
}

export function toReset (dispatch) {
  console.log('action upload')
  dispatch({ type: 'TO_RESET' })
}

export function exit (dispatch, data) {
  console.log('action upload', data)
  dispatch({ type: EXIT })
}
