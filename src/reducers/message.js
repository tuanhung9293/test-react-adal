import {
    RESPONSE_MESSAGE,
    ERROR_MESSAGE,
} from '../store/actions/ActionTypes';

export default function message(state = {response: '', error: ''}, action) {
    switch (action.type) {
        case RESPONSE_MESSAGE:
            return {
                response: action.response.data
            };
        case ERROR_MESSAGE:
            return {
                error: action.response && action.response.config.data
            };
        default:
            return state;
    }
};
