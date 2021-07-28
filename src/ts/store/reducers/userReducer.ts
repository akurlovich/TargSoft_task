import { IUser } from "../../model"

interface IUserState {
  users: any[];
  loading: boolean;
  posts: IUser[];
  error: null | string;
}

enum UserActionType {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface IFetchUsersAction {
  type: UserActionType.FETCH_USERS
  
}
interface IFetchUsersSeccessAction {
  type: UserActionType.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface IFetchUsersErrorAction {
  type: UserActionType.FETCH_USERS_ERROR;
  payload: string;
}

type UserAction = IFetchUsersAction | IFetchUsersSeccessAction | IFetchUsersErrorAction;

const initialState: IUserState = {
  users: [],
  loading: false,
  posts: [],
  error: null,
}

export const userReducer = (state: IUserState = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionType.FETCH_USERS:
      return {loading: true, error: null, users: [], posts: []}
    case UserActionType.FETCH_USERS_SUCCESS:
      return {loading: false, error: null, users: action.payload, posts: []}
    case UserActionType.FETCH_USERS_ERROR:
      return {loading: false, error: action.payload, users: [], posts: []}
    default: 
      return state
      
  }
}