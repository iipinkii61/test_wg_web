import axios from "../config/axios";

export const getData = () => axios.get("/data");
export const deleteData = (dataId) => axios.delete(`/data/${dataId}`);
export const createData = (input) => axios.post("/data/add", input);
export const updateData = (dataId, input) =>
  axios.patch(`/data/${dataId}`, input);
