import React, { Component } from 'react'
import DeleteUserService from "./DeleteUserService"
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import { Grommet } from 'grommet'
import { Redirect } from 'react-router-dom';
import "../menu/Menu.css";
// import Button from '@material-ui/core/Button';
// import { Home } from '../pages/Home'

class DeleteNow extends Component {
    constructor(props) {
        super(props)
        this.client = new DeleteUserService();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.state = {
            text: "",
            deleted: false
        }
    }

    handleRemove = (e) => {
        let userName = this.state.text
        e.preventDefault();
        this.client.deleteNow(userName);
        this.setState({deleted: true})
        return
    }

    handleChange = e => {
        this.setState({ text: e.target.value })
    };

    render() {
        if (!this.state.deleted) {
            return (
                <div>
                    <Grommet>

                        < br />
                        <Menu isAuthenticated={this.props.isAuthenticated}
                        />
                        <Link to="/messagefeed">Message Feed </Link><br />
                        <Link to="/">Profile </Link><br />
                        <Link to="/userlist"> User List</Link><br />
                        {/* <Home /> */}
                        <br />
                        <form id="delete-user" onSubmit={this.handleRemove}>
                            <label htmlFor="delete">Type Username to Delete:</label>
                            <input
                                type="text"
                                name="delete"
                                onChange={this.handleChange}
                                required

                            /><br />
                            <button type="submit">
                                Delete Forever!
                            </button>
                        </form>
                    </Grommet>

                </div>
            )
        }
        else {
            return (
                <Redirect to="/login" />
            )
        }
    }
}
// then take to blank page which says: 'Thank you. Now make a new user."
//window.location = "https://www.example.com";(use where you would use an 'alert'.)

export default DeleteNow;
