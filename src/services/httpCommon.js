import axios from "axios";

const api = axios.create({
    baseURL: "https://api-clientes04.herokuapp.com/api/v1/clientes/",


});

export default api;
