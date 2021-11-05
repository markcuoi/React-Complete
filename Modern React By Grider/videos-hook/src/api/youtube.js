import axios from "axios";

const KEY = "AIzaSyAzODUrARNtKh5K2UZj-stYs7yc-5KYtGM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});
