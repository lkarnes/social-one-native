import axios from 'axios';

export default function axiosWithAuth(token){
    return axios.create({
        baseURL: 'https://social-1.herokuapp.com/api',
        headers: {
            token: token,
        }
    });
};