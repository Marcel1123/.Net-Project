import axios from 'axios';

const registerEndPoint = 'http://localhost:49536/api/v1/Person';

const registerPerson = async (body) => {
    const resp = await axios.post(
        registerEndPoint, 
        body,
        );
    console.log('await done');
}

export default registerPerson;