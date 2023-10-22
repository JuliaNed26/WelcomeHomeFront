import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://WelcomeHome/api/1.0/',
    // headers: { "API-KEY": "8604cc03-3d58-4a45-8602-e011234bfbbf" }
})