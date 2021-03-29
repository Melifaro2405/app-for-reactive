import React from "react";

import './AboutApp.css';

const AboutApp = () => {
  return (
    <section className='about-app'>
      <h2>Версия приложения 1.0.42</h2>
      <div className='about-app__description'>
        <div className='about-app__description--technologies'>
          <p>Использован следующий стек:</p>
          <span>- HTML / CSS / ReactJS</span>
          <span>- react-redux</span>
          <span>- redux-devtools-extension</span>
          <span>- redux-thunk</span>
          <span>- react-router-dom</span>
          <span>- react-hooks / react-redux-hooks</span>
          <span>- axios / async-await / try-catch</span>
        </div>
        <div className='about-app__description--functional'>
          <p>Описание функционала:</p>
          <span>В приложении реализовано получение данных с jsonplaceholder.typicode.com
            в виде списка пользователей, а так же постов к ним по userId.</span>
          <span>У пользователя можно поменять поле "username".</span>
          <span>Реализовано удаление и добавление единиц списка.</span>
          <span>Все действия проходят через redux actions. Настроены Redux devTools.</span>
          <span>Проверено на переполнение контента.</span>
          <span>Протестировано в браузерах Chrome v89, Safari v14, Firefox v85</span>
        </div>
      </div>
      <p>Ссылка на GitHub (исходный код приложения):</p>
      <a href='https://github.com/Melifaro2405/app-for-reactive' target='_blank' rel="noreferrer">
        <i className="fa fa-github-square about-app__github"/>
      </a>
    </section>
  );
};

export default AboutApp;
