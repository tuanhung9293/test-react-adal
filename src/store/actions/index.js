import * as types from './ActionTypes';
import {
    adalApiFetch
} from '../../adalConfig';
import axios from 'axios';

import {
    Cookies
} from 'react-cookie';


const cookies = new Cookies();
// console.log(cookies.get('XSRF-TOKEN'));

export const getTodoList = () => {
    return (dispatch) => {
        adalApiFetch(axios, 'http://localhost:8080/api/todolist')
            .then((response) => {
                dispatch({
                    type: types.GET_TODO_LIST,
                    response
                });
            })
            .catch((error) => {
                console.log("error", error);
            });
    };
};

export const getTodoDetail = (id) => {
    return (dispatch) => {
        adalApiFetch(axios, `http://localhost:8080/api/todolist/${id}`)
            .then((response) => {
                dispatch({
                    type: types.GET_TODO_DETAIL,
                    response
                });
            })
            .catch((error) => {
                console.log("error", error);
            });
    };
};

export const addTodoList = (data) => {
    return (dispatch) => {
        adalApiFetch(axios, 'http://localhost:8080/api/todolist', {
                method: 'POST',
                data: data,
                headers: {
                    // 'XSRF-TOKEN': cookies.get('XSRF-TOKEN'),
                    // 'Cookie': `JSESSIONID=${cookies.get('JSESSIONID')}; XSRF-TOKEN=${cookies.get('XSRF-TOKEN')}`,
                    'X-XSRF-TOKEN':'3254ac17-af1f-4fab-83cc-8b655b3f7994',
                    // 'Cookie': 'JSESSIONID=C53B05F19075CD6A38C366F0BB862B0B; XSRF-TOKEN=3254ac17-af1f-4fab-83cc-8b655b3f7994',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                credentials: 'include',
            })
            .then((response) => {
                dispatch({
                    type: types.ADD_TODO_LIST,
                    response
                });
            })
            .catch((error) => {
                console.log("error", error);
            });
    };
};

export const editTodoList = (data) => {
    return (dispatch) => {
        adalApiFetch(axios, 'http://localhost:8080/api/todolist', {
                method: 'PUT',
                data: data
            })
            .then((response) => {
                dispatch({
                    type: types.EDIT_TODO_LIST,
                    response
                });
            })
            .catch((error) => {
                console.log("error", error);
            });
    };
};

export const deleteTodoList = (id) => {
    return (dispatch) => {
        adalApiFetch(axios, `http://localhost:8080/api/todolist/${id}`, {
                method: 'DELETE'
            })
            .then((response) => {
                dispatch({
                    type: types.DELETE_TODO_LIST,
                    response
                });
            })
            .catch((error) => {
                console.log("error", error);
            });
    };
};