import React from 'react';
import { Redirect } from 'react-router-dom';
import { getPersonId, delPersonId } from '../Authentificator/personIdHandler';
import Menu from './utils/menu';
import MapContainer from './utils/map';

import './index.css';


export default class UserHome extends React.Component{

    logOutUser = () => {
        delPersonId();
        this.forceUpdate();        
    }
    
    render(){
        if(!getPersonId()){ return <Redirect to='/'/>; }

        return(
        <div className='user-home'>
            <div className='user-header'>
                <button
                    className='btn btn-secondary btn-sm'
                    onClick={this.logOutUser}
                >
                    Log Out
                </button>
            </div>
            <div className='user-home-container'>
                <Menu></Menu>
                <MapContainer></MapContainer>
            </div>
        </div>
        );
    }

}