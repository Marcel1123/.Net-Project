import axios from 'axios';
import config from '../../../config/index';

const loginPerson = async (body) => {
    return axios.post(`${config.serverURL}/Person/login`, body)
        .then((response) => {
            if(response.status === 200 && response.data){ return true; }
            return false;
        })
        .catch((err) => {
            console.log('loginPerson', err);
            return false;
        });
}

export default loginPerson;