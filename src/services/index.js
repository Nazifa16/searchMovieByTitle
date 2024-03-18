import axios from "axios";

const baseURL = "https://www.omdbapi.com/";
const API_KEY = "a407a7b3";

export const getMovies = async () => {
  try {
    const response = await axios.get(baseURL, {
      params: {
        apikey: API_KEY,
        s: "movie",
        limit: 100,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
