import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 4rh9gaL1C_KHCCOUkPJAFiylC4MH8btncPBDbkQXMNM",
  },
});
