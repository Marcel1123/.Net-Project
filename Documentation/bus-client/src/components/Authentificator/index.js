import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import verified from '../../images/verified.jpg';
import wrong from '../../images/wrong.jpg';


export default class Authentificator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            auth: 'login',
            showModal: false,
            modalMessage: '',
            modalImg: wrong,
        };
    }

    handleRegisterResponse = (resp) => {
        let msg = 'Something went wrong!';
        let auth = 'register';
        let img = wrong;
        if(resp){
            msg = 'User successfully created!';
            auth = 'login';
            img = verified;
        }
        this.setState({modalMessage: msg, showModal: true, modalImg: img, auth}, () => {
            setTimeout(() => {
                this.setState({showModal: false})
            }, 2000);
        });
    }

    render(){
        return(
        <>
            {this.state.showModal &&
                <div className='register-modal'>
                    <img src={this.state.modalImg} alt=''/>
                    {this.state.modalMessage}
                </div>
            }
            {this.state.auth === 'login' &&
                <LoginForm
                    changeAuth={(val) => this.setState({auth: val})}
                >
                </LoginForm>}
            {this.state.auth === 'register' &&
                <RegisterForm
                    changeAuth={val => this.setState({auth: val})}
                    updateModal={resp => {this.handleRegisterResponse(resp)}}
                >
                </RegisterForm>
            }
        </>
        );
    }

}