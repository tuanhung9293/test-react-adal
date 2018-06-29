import users from './users';
import todoList from './todoList';
import message from './message';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  users,
  todoList,
  message,
  routing: routerReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
