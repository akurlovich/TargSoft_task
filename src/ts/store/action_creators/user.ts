import axios from "axios";
import { Dispatch } from "redux"
import { UserAction, UserActionType } from "../../types/user"

export const fetchUsers = (page: number = 1, limit: number = 10) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionType.FETCH_USERS});
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/', {
        params: {_page: page, _limit: limit}
      });
      dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: response.data});
    } catch (error) {
      dispatch({type: UserActionType.FETCH_USERS_ERROR, payload: 'Error get Posts'})
    }
  }
}

export function setPostsPage (page: number): UserAction {
  return {type: UserActionType.SET_USERS_PAGE, payload: page}
}
