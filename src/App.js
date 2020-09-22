import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import { Grommet } from 'grommet'
import UserProfile from "./components/user-profile/UserProfile"

<<<<<<< HEAD
// import DeleteUser from "./pages/DeleteUser";
=======
import DeleteUser from "./components/deleteUser/DeleteUser";
>>>>>>> 49bd5cb545c5772516ab49ece9a7b9428e4f8aeb
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
     <UserProfile/>
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
<<<<<<< HEAD
          path="/deleteUser"
          component={DeleteUser} */}
        {/* /> */}
=======
          path="*"
          component={NotFound}
        />
        
>>>>>>> 49bd5cb545c5772516ab49ece9a7b9428e4f8aeb
      </Switch>



    </div >

  );
}

export default App;














