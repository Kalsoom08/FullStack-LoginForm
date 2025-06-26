import axios from "axios"


const Api = axios.create({
    baseURL : "http://localhost:4000/api/user"
});

 export const registerUser = async(userData) => {
    const res = await Api.post('/register', userData);
    return res.data;
};

export const loginUser = async (userData) => {
    const res = await Api.post('/login', userData);
    return res.data;
}