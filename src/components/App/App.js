import React from "react";
import {Route, Switch} from "react-router-dom";
import UserList from "../UserList/UsersList";
import Header from "../Header/Header";
import UserPosts from "../UserPosts/UserPosts";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path={'/list'} exact component={UserList}/>
        <Route path={'/posts/:id'} exact render={({match}) => {
          return <UserPosts id={match.params.id} />
        }} />
        <Route path={'/about'} render={() => (
          <p style={{textAlign: "center", fontSize: 30}}>
            Версия приложения 1.0.42
          </p>)
        }/>
      </Switch>
    </div>
  );
}

export default App;
