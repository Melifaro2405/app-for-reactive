import React from "react";

import './AboutApp.css';

const AboutApp = () => {
  return (
    <section className='about-app'>
      <h2>Версия приложения 1.0.42</h2>
      <div className='about-app__description'>

        <div  className='about-app__description--technologies-list'>
          <h3>Использован следующий стек:</h3>
          <ul>
            <li>- HTML / CSS / ReactJS</li>
            <li>- react-redux</li>
            <li>- redux-devtools-extension</li>
            <li>- redux-thunk</li>
            <li>- react-router-dom</li>
            <li>- react-hooks / react-redux-hooks</li>
            <li>- axios / async-await / try-catch</li>
          </ul>
        </div>

        <div className='about-app__description--functional-list'>
          <h3>Описание функционала:</h3>
          <ul>
            <li>В приложении реализовано получение данных с jsonplaceholder.typicode.com
              в виде списка пользователей, а так же постов к ним по userId.</li>
            <li>У пользователя можно поменять поле "username".</li>
            <li>Реализовано удаление и добавление единиц списка.</li>
            <li>Все действия проходят через redux actions. Настроены Redux devTools.</li>
            <li>Проверено на переполнение контента.</li>
            <li>Протестировано в браузерах Chrome v89, Safari v14, Firefox v85</li>
          </ul>
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
