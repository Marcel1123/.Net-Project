import axios from 'axios';
import config from '../../../config/index';

const loginPerson = async (body) => {
    return axios.post(`${config.serverURL}/Person/login`, body)
        .then((response) => {
            if(response.status === 200 && response.data) { 
                console.log(response.data)
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(position => {
                        // console.log(position.coords)
                        const { latitude: userLat, longitude: userLong } = position.coords;
                        console.log(userLat, userLong)
                        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLat},${userLong}&key=AIzaSyCdQ25z8fj5hfTRMONCWin8zY08ZRuFQC0`)
                            .then(resp => {
                                console.log(resp)
                            })
                    });
                }
                return response.data;
            }
            return false;
        })
        .catch((err) => {
            console.log('loginPerson', err);
            return false;
        });
}

export default loginPerson;