import axios from 'axios';

const loginEndPoint = 'http://localhost:49536/api/v1/Person/login';

const loginPerson = async (body) => {
    const resp = await axios.post(
        loginEndPoint, 
        body,
        );
    console.log('await done');
}

export default loginPerson;