import React from 'react';
import logo from '../../../logo.png'

import registerPerson from './actions';



export default class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',       
        };
    }

    handleTextField = (event, param) =>{
        this.setState({[param]: event.target.value});
    }

    updateRegisterMessage = (response) => { this.props.updateModal(response) }

    validateRegister = () => {
        // const { firstName, lastName, email, username, password } = this.state;
        // validate here all the register inputs
        // alert('register validation returns true');
        return true;
    }

    submitRegister = async (event) => {
        event.preventDefault();
        const { firstName, lastName, email, username, password } = this.state;
        if(this.validateRegister()){
            const registered = await registerPerson({firstName, lastName, email, username, password});
            this.updateRegisterMessage(registered);
        }
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
                    First Name
                </label>
                    <input
                        className='form-control'
                        type='text'
                        value={this.state.firstName}
                        placeholder='Enter firstName'
                        onChange={(event) => this.handleTextField(event, 'firstName')}
                    >
                    </input>
                <label className='font-weight-bold form-label'>
                    Last name
                </label>
                    <input
                        className='form-control'
                        type='text'
                        value={this.state.lastName}
                        placeholder='Enter lastName'
                        onChange={(event) => this.handleTextField(event, 'lastName')}
                    >
                    </input>
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