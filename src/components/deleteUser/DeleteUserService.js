import { jsonHeaders, handleJsonResponse } from "../../redux/actionCreators/constants";
import axios from "axios"

class DeleteUserService {
    constructor(url = 'https://socialapp-api.herokuapp.com/users/', client = axios.get()) {
        this.url = url;
        // this.client = client;
    }

    deleteNow(userName) {
        const loginData = JSON.parse(localStorage.getItem("login"));

        fetch(this.url + userName, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${loginData.result.token}`, ...jsonHeaders },
            // body: JSON.stringify(userName)
        })
            .then(handleJsonResponse)
            .then(result => {
                return result
            })
    }

};

export default DeleteUserService;