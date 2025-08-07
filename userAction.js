import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"
import axios from 'axios'
export const fetchUsersRequest = () => {
    return {
       type :FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = users => {
    return {
       type :FETCH_USERS_SUCCESS,
       payload: users
    }
}
export const fetchUsersFailure = error => {
    return {
       type :FETCH_USERS_FAILURE,
       payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest) //this will set loading to true
       axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {//if request is successfull then we get the response
    const users=response.data;
    dispatch(fetchUsersSuccess(users))//After we get the response ,we dispatch an action 
  })
  .catch(error => {
    const errorMsg=error.message
    dispatch(fetchUsersFailure(errorMsg))
  });

    }
}