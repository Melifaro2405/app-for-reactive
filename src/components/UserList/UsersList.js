import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../redux/api-actions";
import UserCreation from "../UserCreation/UserCreation";
import {changeUser, deleteUser} from "../../redux/actions";
import {Link} from "react-router-dom";

import './UserList.css';

function UsersList() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleChangeUser = (id) => {
    const userById = users.find((user) => user.id === id);

    const getNewUserName = () => {
      const newValue = prompt('Введите новый username', '');
      return newValue ? newValue : userById.username;
    }
    const updatedUser = {...userById, username: getNewUserName()};

    dispatch(changeUser(updatedUser));
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const content = (
    users && users.map(({id, name, username}, index) => (
      <li key={id} className='users-list__item'>
        <Link to={`/posts/${id}`}>
          <article>{index + 1}. {name}</article>
          <span>username: {username}</span>
        </Link>
        <div>
          <button
            className='btn'
            onClick={() => handleChangeUser(id)}>
            <i className="fa fa-pencil-square-o"/>
          </button>
          <button
            className='btn'
            onClick={() => handleDeleteUser(id)}>
            <i className="fa fa-trash-o"/>
          </button>
        </div>
      </li>
    ))
  );

  return (
    <section className='users-list'>
      <div className='users-list__wrapper'>
        <div className='users-list__container'>
          <ul>
            {loading ? <p>loading...</p> : content}
          </ul>
          <UserCreation/>
        </div>
      </div>
    </section>
  );
}

export default UsersList;
