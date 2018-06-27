import * as types from './ActionTypes';

export const userLogin = (data = {
    "email": "",
    "password": ""
}) => {
    return {
        types: [types.API_REQUEST_SEND, types.USER_LOGIN, types.AUTH_DISCARD_TOKEN],
        payload: {
            request: {
                url: '/auth/sign_in',
                method: 'POST',
                data
            }
        }
    };
};

export const userLogout = () => {
    return {
        types: [types.API_REQUEST_SEND, types.USER_LOGOUT, types.AUTH_DISCARD_TOKEN],
        payload: {
            request: {
                url: '/auth/sign_out',
                method: 'DELETE',
            }
        }
    };
};
