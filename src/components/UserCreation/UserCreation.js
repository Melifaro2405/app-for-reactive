import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import './UserCreation.css';
import {addUser} from "../../redux/api-actions";

const UserCreation = () => {

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const dispatch = useDispatch();

  const onChangeName = (evt) => {
    setName(evt.target.value);
  };

  const onChangeNickname = (evt) => {
    setNickname(evt.target.value);
  };

  const onSubmitUserData = (evt) => {
    evt.preventDefault();
    dispatch(addUser({name, nickname}));
    setName('');
    setNickname('');
  };

  return (
    <form
      onSubmit={onSubmitUserData}
      className='creation-user__wrapper'>
        <h3 className='creation-user__title'>Добавить</h3>
        <label htmlFor='creation-user-name'>
          <input
            onChange={onChangeName}
            type='text'
            id='creation-user-name'
            name='creation-userName'
            placeholder='Введите имя'
            value={name}
            required
          />
        </label>
        <label htmlFor="creationUserNickname">
          <input
            onChange={onChangeNickname}
            type='text'
            id='creationUserNickname'
            name='creationUserNickname'
            placeholder='Введите username'
            value={nickname}
          />
        </label>
        <button type='submit' className='btn'>
          Создать
        </button>
    </form>
  );
};

export default UserCreation;
