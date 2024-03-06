import { ApiRepository } from "../../repository/api";
import { getGif } from "./giphy.type";

const api = new ApiRepository("http://api.giphy.com/v1/gifs");
const API_KEY = "fXJO8BrCO2rg2N1g9817WONhAps78CsS";

const getGifSearch = async ({ limit, q, offset }: getGif) => {
  const response = await api.get("/search", {
    api_key: API_KEY,
    limit,
    q,
    offset,
  });
  return response;
};

const getGifTrending = async ({ limit, offset }: getGif) => {
  const response = await api.get("/trending", {
    api_key: API_KEY,
    limit,
    offset,
  });
  return response;
};

export { getGifSearch, getGifTrending };
