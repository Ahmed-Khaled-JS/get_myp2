import axios from "axios";
const apiclient = axios.create({
  baseURL: "https://proabdo.herokuapp.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});
export default {
  getEvents() {
    return apiclient.get("/api/Users/getprtofilo");
  },
  getWow(id) {
    return apiclient.get("/api/Users/getprojects?id=" + id);
  },
};
