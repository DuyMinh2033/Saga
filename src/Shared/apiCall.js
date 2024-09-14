import axios from 'axios';

export const Method = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
};

export async function apiCall(url, method, payload = null) {
    console.log("url", {url, method, payload })
    try {
        const response = await axios({
            method: method,
            url: `${url}/${payload ? payload :''}`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            data: payload,
        });
        return { data: response.data, errors: [] };
    } catch (error) {
        return { data: null, errors: [error.message] };
    }
}
