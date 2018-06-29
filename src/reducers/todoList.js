import {
    GET_TODO_LIST,
    ADD_TODO_LIST,
    EDIT_TODO_LIST,
    DELETE_TODO_LIST
} from '../store/actions/ActionTypes';

export default function todoList(state = [], action) {
    switch (action.type) {
        case GET_TODO_LIST:
            return action.response.data;
        case ADD_TODO_LIST:
            return [
                ...state,
                ...JSON.parse(action.response.config.data),
            ];
        case EDIT_TODO_LIST:
            return state.map((item) => {
                if (action.data.ID === item.ID) {
                    return action.data
                } else {
                    return item
                }
            })
        case DELETE_TODO_LIST:
            return state.filter((item) => {
                if (action.ID !== item.ID) {
                    return item
                } 
            });
        default:
            return state;
    }
};
