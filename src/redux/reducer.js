import {ActionType} from "./actions";

const initialState = {
  users: null,
  posts: null,
  loading: false,
  error: null,
  id: 0
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {

    case ActionType.GET_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ActionType.GET_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
        posts: null,
        loading: false,
        error: null
      };

    case ActionType.CREATE_USER:
      return {
        ...state,
        users: [...state.users, payload]
      }

    case ActionType.DELETE_USER:
      const updatedUsers = state.users.filter((user) => user.id !== payload);
      return {
        ...state,
        users: updatedUsers
      }

    case ActionType.GET_USER_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
        error: null
      }

    case ActionType.CHANGE_USER:
      const newUsers = state.users.map((user) => (user.id === payload.id) ? payload : user);

      return {
        ...state,
        users: newUsers
      }

    default:
      return state;
  }

};

export default reducer;
