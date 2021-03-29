import React from "react";
import {Route, Switch} from "react-router-dom";
import UserList from "../UserList/UsersList";
import Header from "../Header/Header";
import UserPosts from "../UserPosts/UserPosts";
import AboutApp from "../AboutApp/AboutApp";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path={'/list'} exact component={UserList} />
        <Route path={'/posts/:id'} exact render={({match}) => {
          return <UserPosts id={match.params.id} />
        }} />
        <Route path={'/about'} component={AboutApp} />
      </Switch>
    </div>
  );
}

export default App;
