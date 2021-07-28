import { IUserState, UserAction, UserActionType } from "../../types/user"

const initialState: IUserState = {
  users: [],
  loading: false,
  posts: [],
  error: null,
  page: 1,
  limit: 10,
}

export const userReducer = (state: IUserState = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionType.FETCH_USERS:
      // return {loading: true, error: null, users: [], posts: [], page: 1, limit: 10}
      return {...state, loading: true}
    case UserActionType.FETCH_USERS_SUCCESS:
      // return {loading: false, error: null, users: [], posts: action.payload, page: 1, limit: 10}
      return {...state, loading: false, posts: action.payload}
    case UserActionType.FETCH_USERS_ERROR:
      // return {loading: false, error: action.payload, users: [], posts: [], page: 1, limit: 10}
      return {...state, loading: false, error: action.payload}
    case UserActionType.SET_USERS_PAGE:
      return {...state, page: action.payload}
    default: 
      return state
      
  }
}