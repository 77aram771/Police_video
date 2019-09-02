import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Root, Header, Toast} from 'native-base';
import SignUpPage from '../Components/SignUpPage';
import LoginPage from '../Components/LoginPage';
import ForgotPasswordPage from '../Components/ForgotPasswordPage'
import ConfirmPage from '../Components/ConfirmPage'
import ResetPasswordPage from '../Components/ResetPasswordPage'
import HomeRoute from './HomeRoute';
import axios from 'axios';
import stringsoflanguages from "../leng/stringsoflanguages";
import {AsyncStorage} from "react-native";

import * as action from '../store/actions/users';

const {EmailIsNotCorrect, PasswordLengthShould, PasswordstringsoflanguagesDoesNotMatch, AllFieldsShouldBeFilled} = stringsoflanguages;

class Main extends Component {

    componentDidMount = () => {
        //console.log('AsyncStorage-----------------------------------------', AsyncStorage.getItem("userData"))
    };

    static navigationOptions = ({navigation}) => {
        return {
            header: null,
            headerLeft: null,
            gesturesEnabled: false,
            swipeEnabled: false
        }
    };

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            code: ''
        }
    }

    resetState = () => {
        this.setState({
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            code: ''
        })
    }

    showMsg = (text) => {
        Toast.show({
            text: text,
            buttonText: "Okay",
            position: 'center',
            duration: 5000
        })
    }

    onLogin = () => {
        const {email, password} = this.state;
        if (this.fieldsFilledValidate(email, password)) {
            if (this.isEmailAddress(email)) {
                //console.log('login')
                const data = {email, password}
                this.props.onLogIn(data)
                this.resetState()
            }
            else {
                console.log('qweqweqweqweasdasdasdasd')
            }
        }
    }

    onSignUp = () => {
        const {password, email, confirmPassword, userName} = this.state
        if (this.fieldsFilledValidate(email, password, confirmPassword, userName)) {
            if (this.isEmailAddress(email)) {
                if (this.passwordLength()) {
                    if (this.confirmPasswordValidation()) {
                        //console.log('sign up')
                        const data = {email, password, name: userName}
                        this.props.onSignUp(data)
                        this.resetState()
                    }
                }
            }
        }
    }

    isEmailAddress = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const boolean = re.test(String(email).toLowerCase());
        if (boolean) {
            return true
        }
        this.showMsg(EmailIsNotCorrect)
        return false
    }

    passwordLength = () => {
        if (this.state.password.length < 6) {
            this.showMsg(PasswordLengthShould)
            return false
        }
        return true
    }

    confirmPasswordValidation = () => {
        const {password, confirmPassword} = this.state;
        if (password === confirmPassword) {
            return true
        }
        this.showMsg(PasswordDoesNotMatch)
        return false
    }

    fieldsFilledValidate = (...fields) => {
        let isFlag = true;
        fields.forEach(item => {
            if (item.length < 2) {
                this.showMsg(stringsoflanguages.AllFieldsShouldBeFilled)
                isFlag = false
                return
            }
        })
        return isFlag
    }

    onForgotPassword = () => {
        const {email} = this.state
        if (this.isEmailAddress(email)) {
            this.props.onForgotPassword({email})
        }
    }

    onConfirmCode = () => {
        const {code} = this.state;
        this.props.onConfirmCode(this.props.user.data.token, {code: code})
    }

    onResetPassword = () => {
        const {password} = this.state
        if (this.passwordLength()) {
            if (this.confirmPasswordValidation()) {
                this.props.onResetPassword(this.props.user.data.token, {password: password})
                this.resetState()
            }
        }
    }

    inputChange = (target, value) => {
        this.setState({[target]: value, msg: ""})
    }

    changeToLogIn = () => {
        this.props.toLogin()
        this.resetState()
    }

    changeToSignUp = () => {
        this.props.toSignUp()
        this.resetState()
    }

    changeToReset = () => {
        this.props.toReset()
        this.resetState()
    }

    render() {
        //console.log('main', this.props.user)
        if (this.props.user.login) {
            return (
                <LoginPage
                    changeToSignUp={this.changeToSignUp}
                    inputChange={this.inputChange}
                    email={this.state.email}
                    password={this.state.password}
                    onLogin={this.onLogin}
                    changeToReset={this.changeToReset}/>
            );
        }
        if (this.props.user.signUp) {
            return (
                <SignUpPage
                    changeToLogIn={this.changeToLogIn}
                    inputChange={this.inputChange}
                    email={this.state.email}
                    userName={this.state.userName}
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                    onSignUp={this.onSignUp}/>
            );
        }
        if (this.props.user.email) {
            return (
                <ForgotPasswordPage
                    inputChange={this.inputChange}
                    email={this.state.email}
                    changeToLogIn={this.changeToLogIn}
                    onForgotPassword={this.onForgotPassword}/>
            );
        }
        if (this.props.user.confirm) {
            return (
                <ConfirmPage
                    inputChange={this.inputChange}
                    code={this.state.code}
                    onConfirmCode={this.onConfirmCode}/>
            );
        }
        if (this.props.user.reset) {
            return (
                <ResetPasswordPage
                    inputChange={this.inputChange}
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                    onResetPassword={this.onResetPassword}/>
            );
        }
        return (
            <HomeRoute/>
        )
    }
}


this.mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

this.mapDispatchToProps = (dispatch) => {
    return {
        onLogIn: (data) => {
            action.onLogIn(dispatch, data)
        },
        onSignUp: (data) => {
            action.onSignUp(dispatch, data)
        },
        toLogin: () => {
            action.toLogin(dispatch)
        },
        toSignUp: () => {
            action.toSignUp(dispatch)
        },
        toReset: () => {
            action.toReset(dispatch)
        },
        onForgotPassword: (data) => {
            action.onForgotPassword(dispatch, data)
        },
        onResetPassword: (token, data) => {
            action.onResetPassword(dispatch, token, data)
        },
        onConfirmCode: (token, data) => {
            action.onConfirmCode(dispatch, token, data)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)


