import React, { Component } from 'react';
import logo from '../../../logo.png'



export default class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: '',              
        };
    }

    handleTextField = (event, param) =>{
        this.setState({[param]: event.target.value});
    }

    submitRegister = (event) => {
        console.log('check register')
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
                onSubmit={this.submitRegister}
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
                        onChange={(event) => this.handleTextField(event, 'username')}
                    >
                    </input>
                <label className='font-weight-bold form-label'>
                    Email
                </label>
                    <input
                        className='form-control'
                        type='text'
                        value={this.state.email}
                        placeholder='Enter email'
                        onChange={(event) => this.handleTextField(event, 'email')}
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
                        onChange={(event) => this.handleTextField(event, 'password')}
                    >
                    </input>
                <label className='font-weight-bold form-label'>
                    Repeat password
                </label>
                    <input
                        className='form-control'
                        type='password'
                        // value={this.state.password}
                        placeholder='Enter password again'
                        onChange={(event) => this.handleTextField(event, 'password2')}
                    >
                    </input>
                <button
                    type='submit'
                    className='btn btn-primary btn-sm form-row'
                    style={{marginTop: 25}}
                >
                    Register
                </button>
                <button
                    type='button'
                    className='btn btn-secondary btn-sm form-row'
                    onClick={() => this.props.changeAuth('login')}
                >
                    Log In
                </button>
            </form>
        </div>
        );
    }

}