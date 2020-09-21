import React, { Component } from 'react'
import DeleteUserService from "./DeleteUserService"

class DeleteNow extends Component {
    constructor(props) {
        super(props)
        this.client = new DeleteUserService()
        this.state = {
            text: ""
        }
    }

    handleSubmit = e => {
        this.client.deleteNow(this.state)
    }

    handleChange = e => {
        this.setState({ text: e.target.value } = [""]);
        console.log(JSON.stringify(this.state))
      };

    render() {
        return (
            <div>
                <form id="delete-user" onSubmit={this.handleSubmit}>
                <label htmlFor="message">Message</label>
                    <input
                        type="text"
                        name="delete"
                        required
                        onChange={this.handleChange}
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
// then take to blank page which says: 'Thank you. Now make a new user."
//window.location = "https://www.example.com";(use where you would use an 'alert'.)

export default DeleteNow;
