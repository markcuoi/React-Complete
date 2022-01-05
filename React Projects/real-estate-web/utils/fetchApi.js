import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "26194818bdmsh61cd07741744575p1a22aejsnfa3b4f6ecd9f",
    },
  });

  return data;
};
