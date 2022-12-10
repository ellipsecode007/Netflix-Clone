import axios from "axios";

//It creates the base url to be used with multiple API requests.
const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3/"
});

export default instance;