import { Cookies } from 'react-cookie';
// import {
//   USER_LOGIN,
//   USER_LOGOUT,
// } from '../constants/ActionTypes';

const cookies = new Cookies();
let initialState = cookies.get('authState') || {};

export default function auth(state = initialState, action) {
  let authState = state;
  return authState;
};
