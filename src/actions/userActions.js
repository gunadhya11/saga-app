import * as types from "../types/users";

export const fetchUsers = () => {
  return {
    type: types.FETCH_USERS_PENDING,
  };
};

export const fetchUsersSuccess = () => {
  return {
    type: types.FETCH_USERS_SUCCESS,
  };
};
export const fetchUsersFailure = () => {
  return {
    type: types.FETCH_USERS_FAILURE,
  };
};
