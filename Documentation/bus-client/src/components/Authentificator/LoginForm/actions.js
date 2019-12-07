import axios from 'axios';
import config from '../../../config/index';

const loginPerson = async (body) => {
    await axios.post(`${config.serverURL}/Person/login`, body)
        .then((response) => {

        })
        .catch((err) => {
            console.log('loginPerson', err);
        })
}

export default loginPerson;