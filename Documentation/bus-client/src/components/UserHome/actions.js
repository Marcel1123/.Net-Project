import axios from 'axios';

const getUserCurrentLocation = async () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude: userLat, longitude: userLong } = position.coords;
            return axios(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLat},${userLong}&key=AIzaSyCdQ25z8fj5hfTRMONCWin8zY08ZRuFQC0`)
                .then(response => {
                    console.log('here', response.data)
                    return response.data;
                })
                .catch((err) => {
                    console.log('getUserCurrentLocation', err);
                    return {};
                });
        });
    }
    console.log('here2')
}

export default getUserCurrentLocation;

