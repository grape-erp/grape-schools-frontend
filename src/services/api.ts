import axios, { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import { cleanCookies } from '../contexts/AuthContext';

let cookies = parseCookies();

function getCompany() {
    cookies = parseCookies();
    const company = cookies['grape.company'];

    if (company) {
        return JSON.parse(company).company_id;
    }

    return null;
}

export const api = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_HOST ?? 'http://localhost:3333'}`,
    headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${cookies['docs.token']}`,
        'x-company': getCompany(),
    },
});

api.interceptors.response.use(
    response => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response.status === 401) {
            cleanCookies(true);
        }

        return Promise.reject(error);
    },
);
