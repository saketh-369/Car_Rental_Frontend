import axios from "axios";

const instance = axios.create({
    // baseURL : "http://localhost:3000/api/v1/",
    baseURL : "https://carrental-sbyr.onrender.com/api/v1/",
    
})

export default instance;