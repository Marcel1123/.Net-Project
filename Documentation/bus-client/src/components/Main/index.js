import React from 'react';
import Authentificator from '../Authentificator';

export default class Main extends React.Component{

    render(){
        return(
        <div className='main'>
            <div className='main main-auth'>
                <Authentificator></Authentificator>
            </div>
            <div className='main main-description'>
                <h3>Everyone, everywhere, everyday.</h3>
                <h1>Smart City, an app that<br/>takes you away.</h1>
            </div>
        </div>
        );
    }

}