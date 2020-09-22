import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm"
import App from "../src/App";
import { store, history } from "./redux";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <br />
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
// hi dhfi





// import React from "react";
// import LoginForm from "../components/loginForm/LoginForm";
// import Menu from "../components/menu/Menu";
// import { userIsNotAuthenticated } from "../redux/HOCs";
// import RegistrationForm from "../components/registrationForm/RegistrationForm"
// class Home extends React.Component {
//   render() {
//     return (
//       <div className="Home">
//         <Menu />
//         <h2>Your favorite microblogging platform</h2>
//         <LoginForm />
//         <br />
//         <RegistrationForm />
//       </div>
//     );
//   }
// }