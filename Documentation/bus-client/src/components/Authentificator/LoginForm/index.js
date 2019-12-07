import React from 'react';
import logo from '../../../logo.png'

import loginPerson from './actions';


export default class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleTextField = (event, param) =>{
        this.setState({[param]: event.target.value});
    }

    submitLogin = (event) => {
        const  {username, password} = this.state;
        loginPerson({username, password});
        event.preventDefault();
    }

    render(){
        return(
        <div className='authentif-form'>
            <img
                src={logo}
                className='App-logo'
                style={{marginBottom: 30}} 
                alt='logo'
            ></img>
            <form
                onSubmit={this.submitLogin}
                style={{width: 300}}
            >
                <label className='font-weight-bold form-label'>
                    Username
                </label>
                    <input
                        className='form-control'
                        type='text'
                        value={this.state.username}
                        placeholder='Enter username'
                        onChange={(event) => {this.handleTextField(event, 'username')}}
                    >
                    </input>
                <label className='font-weight-bold form-label'>
                    Password
                </label>
                    <input
                        className='form-control'
                        type='password'
                        // value={this.state.password}
                        placeholder='Enter password'
                        onChange={(event) => {this.handleTextField(event, 'password')}}
                    >
                    </input>
                <button
                    type='submit'
                    className='btn btn-primary btn-sm form-row'
                    style={{marginTop: 25}}
                >
                    Log In
                </button>
                <button
                    type='button'
                    className='btn btn-secondary btn-sm form-row'
                    onClick={() => this.props.changeAuth('register')}
                >
                    Register
                </button>
            </form>
        </div>
        );
    }

}