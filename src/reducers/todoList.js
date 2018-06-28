import {
    GET_TODO_LIST,
    ADD_TODO_LIST,
    EDIT_TODO_LIST,
    DELETE_TODO_LIST
} from '../store/actions/ActionTypes';

export default function todoList(state = [], action) {
    switch (action.type) {
        case GET_TODO_LIST:
            return [
                ...state,
                ...action.response.data,
            ];
        default:
            return state;
    }
};
