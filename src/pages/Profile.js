import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";

import UserProfile from "../components/user-profile/UserProfile"
class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
       <UserProfile/>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
