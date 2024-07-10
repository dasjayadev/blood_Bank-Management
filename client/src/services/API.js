import axios from "axios"
let API = axios.create({
    baseURL: "http://localhost:8000",
})
//request intercepters
API.interceptors.request.use((req)=>{
    if(localStorage.getItem("blood-token")){
        req.headers.Authorization = `${localStorage.getItem("blood-token")}`
    }
    return req
})
export default API