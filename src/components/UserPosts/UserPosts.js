import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsById} from "../../redux/api-actions";

import './UserPosts.css';

const UserPosts = ({id}) => {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchPostsById(id));
  }, [dispatch, id]);

  const content = (
    posts && posts.length ? posts.map(({id, title, body}, index) => (
      <li key={id} className='user-posts__list-item'>
        <span>{title}</span>
        <p>{body}</p>
      </li>
    )) : <p>У данного пользователя нет постов</p>
  );

  return (
    <div className='user-posts'>
      <h3>Посты пользователя</h3>
      <ul className='user-posts__list'>
        {loading ? <p>loading...</p> : content}
      </ul>
    </div>
  );
}

export default UserPosts;
