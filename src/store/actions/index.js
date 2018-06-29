import * as types from './ActionTypes';
import {
    adalApiFetch
} from '../../adalConfig';
import axios from 'axios';

import { Cookies } from 'react-cookie';

const cookies = new Cookies();
console.log(`JSESSIONID=${cookies.get('JSESSIONID')}; XSRF-TOKEN=${cookies.get('XSRF-TOKEN')}`);

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
                withCredentials: true
            })
            .then((response) => {
                dispatch({
                    type: types.ADD_TODO_LIST,
                    response
                });
                dispatch({
                    type: types.RESPONSE_MESSAGE,
                    response,
                });
            })
            .catch((error) => {
                console.log("error", error);
                dispatch({
                    type: types.ERROR_MESSAGE,
                    error,
                });
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
                    response,
                    data: data,
                });
                dispatch({
                    type: types.RESPONSE_MESSAGE,
                    response,
                });
            })
            .catch((error) => {
                console.log("error", error);
                dispatch({
                    type: types.ERROR_MESSAGE,
                    error,
                });
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
                    response,
                    ID: id,
                });
                dispatch({
                    type: types.RESPONSE_MESSAGE,
                    response,
                });
            })
            .catch((error) => {
                console.log("error", error);
                dispatch({
                    type: types.ERROR_MESSAGE,
                    error,
                });
            });
    };
};