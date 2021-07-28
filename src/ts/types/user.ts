export interface IUser {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IUserState {
  users: any[];
  loading: boolean;
  posts: IUser[];
  error: null | string;
}

export enum UserActionType {
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

export type UserAction = IFetchUsersAction | IFetchUsersSeccessAction | IFetchUsersErrorAction;