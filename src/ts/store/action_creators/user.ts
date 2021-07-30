import axios from "axios";
import { Dispatch } from "redux"
import { IUser, UserAction, UserActionType } from "../../types/user"

// export const fetchUsers = (page: number = 1, limit: number = 10) => {
  export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionType.FETCH_USERS});
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/', 
      // {
      //   params: {_page: page, _limit: limit}
      // }
      );
      const fetchAllUsers = await axios.get('https://jsonplaceholder.typicode.com/users/');
      const allUsers = fetchAllUsers.data;
      console.log(allUsers[0].name)
      const res: IUser[] = response.data;
      for (let i = 0; i < res.length; i++) {
        switch (res[i].userId) {
          case 1:
            res[i].userName = allUsers[0].name;
            break;
          case 2:
            res[i].userName = allUsers[1].name;
            break;
          case 3:
            res[i].userName = allUsers[2].name;
            break;
          case 4:
            res[i].userName = allUsers[3].name;
            break;
          case 5:
            res[i].userName = allUsers[4].name;
            break;
          case 6:
            res[i].userName = allUsers[5].name;
            break;
          case 7:
            res[i].userName = allUsers[6].name;
            break;
          case 8:
            res[i].userName = allUsers[7].name;
            break;
          case 9:
            res[i].userName = allUsers[8].name;
            break;
          case 10:
            res[i].userName = allUsers[9].name;
            break;
        }
        // if (res[i].userId === 1) {
        //   res[i].userName = allUsers[0].name;
        // }
      }
      dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: res});
    } catch (error) {
      dispatch({type: UserActionType.FETCH_USERS_ERROR, payload: 'Error get Posts'})
    }
  }
}

export function setPostsPage (page: number): UserAction {
  return {type: UserActionType.SET_USERS_PAGE, payload: page}
}
