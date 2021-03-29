import React from 'react';
import {NavLink} from "react-router-dom";

import './navBar.css';

const navigationItems = [
  {title: 'Список пользователей', link: '/list/'},
  {title: 'О приложении', link: '/about/'},
];

const NavBar = () => {
  return (
    <ul className='navigation'>
      {navigationItems.map(({title, link}) => {
        return (
          <li key={title}>
            <NavLink
              className='navigation__link'
              to={link}
              activeClassName='navigation__link--active'
            >{title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default NavBar;
