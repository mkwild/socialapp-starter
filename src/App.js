import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import { Grommet } from 'grommet'
import UserProfile from "./components/user-profile/UserProfile"

// import DeleteUser from "./pages/DeleteUser";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MessageFeed from "./pages/MessageFeed";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  
  return (


   <div className="App">
     <UserProfile/>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/profile/:username"
          component={Profile}
        />
        <Route
          exact
          path="/messagefeed"
          component={MessageFeed}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
        {/* <Route
          exact
          path="/deleteUser"
          component={DeleteUser} */}
        {/* /> */}
      </Switch>



    </div >

  );
}

export default App;














