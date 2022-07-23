 
import * as types from '../types/users';
import { combineReducers } from 'redux';
const initialState = {users:[], loading:false};
const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS_PENDING:
      return { ...state, loading: true };
    case types.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case types.FETCH_USERS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

const reducers = combineReducers({
  users: userReducers,
});

export default reducers;
