import React from 'react';
import ReactModal from 'react-modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


export default class Authentificator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            auth: 'login',
            showModal: true,
            modalMessage: '',
        };
    }

    handleRegisterResponse = (resp) =>{
        const msg = resp ? 'User successfully created!' : 'Something went wrong!';
        const auth = resp ? 'login' : 'register';
        this.setState({modalMessage: msg, showModal: true, auth});
    }

    render(){
        return(
        <>
            <ReactModal
                isOpen={this.state.showModal}
                ariaHideApp={false}
                onRequestClose={() => this.setState({showModal: false})}
                style={{maxHeight: 200}}
            >
                {this.state.modalMessage}
            </ReactModal>
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