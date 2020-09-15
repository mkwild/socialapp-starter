import axios from "axios"

class PostMessageService {
    constructor(url = 'https://socialapp-api.herokuapp.com/', client = axios.create()){
        this.url = url + "messages";
        this.client = client;
    }
    
    postMessage(messageBody) {
        fetch(this.url, {
            method: "POST",
            body: JSON.stringify(messageBody)
        })
        .then(res => res.json())
        .then(data => {
            return data
        })
    }
};

export default PostMessageService;