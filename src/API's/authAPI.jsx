import axios from "axios"


const Api = axios.create({
    baseURL : "http://localhost:4000/api/user"
});
 export const registerUser = async() => {
    const res = await Api.post('register');
}