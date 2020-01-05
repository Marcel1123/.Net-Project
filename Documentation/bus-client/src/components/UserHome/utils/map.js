import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { getPersonId, delPersonId } from '../Authentificator/personIdHandler';


import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
  
const mapStyle = {
    width: 'calc(100% - 20px)' ,
    height: 'calc(100% - 8vh - 20px)',
    marginBottom: 'calc(7vh + 5px)',
};

export class MapContainer extends React.Component {

  render() {
    return (
        <Map 
          google={this.props.google}
          zoom={14}
          containerStyle={mapStyle}
          >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />  
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                {/* <h1>{this.state.selectedPlace.name}</h1> */}
              </div>
          </InfoWindow>
        </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCdQ25z8fj5hfTRMONCWin8zY08ZRuFQC0') //apiKey creation: Dec 17, 2019
})(MapContainer)