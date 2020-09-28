import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import { Grommet } from 'grommet'
import UserProfile from "./components/user-profile/UserProfile"

import DeleteUser from "./pages/DeleteUser";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import UserList from "./pages/UserList";
import MessageFeed from "./pages/MessageFeed";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  
  return (


   <div className="App">
     {/* <UserProfile/> */}
     <Grommet>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/login"
          component={LoginPage}
        />
        <Route
          exact
          path="/profile/:username"
          component={Profile}
        />
        <Route 
          exact
          path="/userlist"
          component={UserList}
        />
        <Route
          exact
          path="/messagefeed"
          component={MessageFeed}
        />
        <Route
          exact
          path="/deleteUser"
          component={DeleteUser}
        />
        {/* <Route
          exact
          path="/deleteUser"
          component={DeleteUser} */}
        {/* /> */}
      </Switch>

</Grommet>


    </div >

  );
}

export default App;














