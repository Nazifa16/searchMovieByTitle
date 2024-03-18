import axios from "axios";

const url = "http://www.omdbapi.com/?apikey=a407a7b3&s=movie&limit=100";
export const getMovies = async () => {
  try {
    const res = await axios({
      method: "GET",
      url,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
