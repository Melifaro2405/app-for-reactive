export const ActionType = {
  GET_REQUEST: 'GET_REQUEST',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_ERROR: 'GET_ERROR',
  CREATE_USER: 'CREATE_USER',
  DELETE_USER: 'DELETE_USER',
  CHANGE_USER: 'CHANGE_USER',
  GET_USER_POSTS: 'GET_USER_POSTS'
};

export const dataRequested = () => ({
  type: ActionType.GET_REQUEST
});

export const usersLoaded = (users) => ({
  type: ActionType.GET_USERS_SUCCESS,
  payload: users
});

export const dataError = (err) => ({
  type: ActionType.GET_ERROR,
  payload: err
});

export const createUser = (newUser) => ({
  type: ActionType.CREATE_USER,
  payload: newUser
});

export const deleteUser = (id) => ({
  type: ActionType.DELETE_USER,
  payload: id
});

export const changeUser = (newUser) => ({
  type: ActionType.CHANGE_USER,
  payload: newUser
});

export const postsLoaded = (posts) => ({
  type: ActionType.GET_USER_POSTS,
  payload: posts
});
