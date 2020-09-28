import { jsonHeaders, handleJsonResponse } from "../../redux/actionCreators/constants";
import axios from "axios"
import { store } from "../../redux"

class DeleteUserService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()){
        this.url = url + "deleteUser";
        // this.client = client;
    }

    deleteNow(userName) {
        const loginData = JSON.parse(localStorage.getItem("login"));

        fetch(this.url, {
            method: "GET",
            headers: { Authorization: `Bearer ${loginData.result.token}`, ...jsonHeaders },
            body: JSON.stringify(userName)
        })
        .then(handleJsonResponse)
        .then(result => {
            return result = ""
        })
    }

getToken() {
    const {token, username } = store.getState().auth.login.result
    return token
}





};

export default DeleteUserService;