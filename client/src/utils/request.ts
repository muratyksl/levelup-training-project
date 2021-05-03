import axios from "axios";

const apiAddress = "http://localhost:8000";

const request = axios.create({
  baseURL: apiAddress,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default request;
