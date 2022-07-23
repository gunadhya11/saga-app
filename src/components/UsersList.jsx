import React from "react";
import { useDispatch } from "react-redux";
import {fetchUsers} from "../actions/userActions";

const UsersList = () => {
  const dispatch = useDispatch();
  return (
    <div>
      UsersList
      <button onClick={()=>dispatch(fetchUsers())}>fetch users button</button>
    </div>
  );
};

export default UsersList;
