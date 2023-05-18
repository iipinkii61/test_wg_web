import axios from "../config/axios";

export const getData = () => axios.get("/data");
export const deleteData = (dataId) => axios.delete(`/data/${dataId}`);

// export const register = (input) => axios.post("/auth/register", input);
// export const login = (input) => axios.post("/auth/login", input);
// export const getMe = () => axios.get("/auth/me");
