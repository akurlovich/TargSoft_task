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
  page: number;
  limit: number;
}

export enum UserActionType {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  SET_USERS_PAGE = 'SET_USERS_PAGE',
}

interface IFetchUsersAction {
  type: UserActionType.FETCH_USERS
  
}
interface IFetchUsersSeccessAction {
  type: UserActionType.FETCH_USERS_SUCCESS;
  payload: IUser[];
}
interface IFetchUsersErrorAction {
  type: UserActionType.FETCH_USERS_ERROR;
  payload: string;
}
interface ISetUsersPage {
  type: UserActionType.SET_USERS_PAGE;
  payload: number;
}

export type UserAction = 
  IFetchUsersAction |
  IFetchUsersSeccessAction |
  IFetchUsersErrorAction |
  ISetUsersPage;