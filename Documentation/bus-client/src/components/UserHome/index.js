import React from 'react';
import { Redirect } from 'react-router-dom';
import { getPersonId, delPersonId } from '../Authentificator/personIdHandler';


export default class UserHome extends React.Component{
    
    render(){
        if(!getPersonId()){ return <Redirect to='/'/>; }

        return(
        <div>
            user home HEREEEEEEEEEEEEEEEEEEEEEEEEE
            <button
            onClick={()=>{
                delPersonId();
                this.forceUpdate();
                }}
            >LOG OUT
            </button>
        </div>
        );
    }

}