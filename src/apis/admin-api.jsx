import axios from "../config/axios";

export const getAllUser = () => axios.get("/admin");
export const deleteUser = (userId) => axios.delete(`/admin/${userId}`);
