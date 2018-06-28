import * as types from './ActionTypes';
import { adalApiFetch } from '../../adalConfig';
import axios from 'axios';

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
        adalApiFetch(axios, 'http://localhost:8080/api/todolist', { method: 'POST', data: data})
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
        adalApiFetch(axios, 'http://localhost:8080/api/todolist', { method: 'PUT', data: data})
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
        adalApiFetch(axios, `http://localhost:8080/api/todolist/${id}`, { method: 'DELETE' })
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