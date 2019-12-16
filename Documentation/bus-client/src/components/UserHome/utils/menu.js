import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { getPersonId, delPersonId } from '../Authentificator/personIdHandler';


export default class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startPoint: '',
            endPoint: '',
        };
        // this.validator = new SimpleReactValidator();
    }

    handleTextField = (event, param) =>{
        this.setState({[param]: event.target.value});
        // this.validator.showMessageFor(param);
    }
    
    render(){

        return(
        <div className='left-menu'>
            <form
                style={{width: 300}}
            >
                <label className='font-weight-bold form-label'>
                    Start point
                </label>
                    <input
                        className='form-control'
                        type='text'
                        value={this.state.startPoint}
                        placeholder='Enter startPoint'
                        onChange={(event) => {this.handleTextField(event, 'startPoint')}}
                    />
                <label className='font-weight-bold form-label'>
                    End point
                </label>
                    <input
                        className='form-control'
                        type='endPoint'
                        value={this.state.endPoint}
                        placeholder='Enter endPoint'
                        onChange={(event) => {this.handleTextField(event, 'endPoint')}}
                    />
                <button
                    type='submit'
                    className='btn btn-primary btn-sm form-row'
                    style={{marginTop: 25}}
                >
                    Search
                </button>
            </form>
        </div>
        );
    }

}