import {createUser, dataError, dataRequested, postsLoaded, usersLoaded} from "./actions";
import {API_ROUTE, getResource, postResource} from "../services/services";

let maxId = 11;

export const fetchUsers = () => async (dispath) => {
  dispath(dataRequested());
  try {
    const {data} = await getResource(API_ROUTE.USERS);
    dispath(usersLoaded(data))
  } catch (err) {
    dispath(dataError(err))
  }
};

export const addUser = ({name, nickname}) => async (dispatch) => {
  try {
    await postResource(API_ROUTE.USERS, {name, nickname});
    dispatch(createUser({
      id: maxId++,
      name,
      username: nickname
    }));
  } catch (err) {
    dispatch(dataError(err));
    console.log(err)
  }
};

export const fetchPostsById = (userId) => async (dispath) => {
  dispath(dataRequested());
  try {
    const {data} = await getResource(`${API_ROUTE.POSTS}?userId=${userId}`);
    dispath(postsLoaded(data))
  } catch (err) {
    dispath(dataError(err))
  }
};
