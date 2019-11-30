import React, { Component } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';



export default class Authentificator extends React.Component{
    constructor(props){
        super(props);
        this.state = {auth: 'login'};
    }

    render(){
        return(
        <>
            {this.state.auth === 'login' &&
                <LoginForm
                    changeAuth={(val) => this.setState({auth: val})}
                >
                </LoginForm>}
            {this.state.auth === 'register' &&
                <RegisterForm
                    changeAuth={(val) => this.setState({auth: val})}
                >
                </RegisterForm>
            }
        </>
        );
    }

}