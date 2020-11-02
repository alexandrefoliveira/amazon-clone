import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-clone-5b9a6.cloudfunctions.net/api"
})

// local baseURL 
// http://localhost:5001/clone-5b9a6/us-central1/api

export default instance;