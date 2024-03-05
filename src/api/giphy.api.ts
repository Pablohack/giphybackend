import { ApiRepository } from "../repository/api";

const api = new ApiRepository("http://api.giphy.com/v1/gifs/search");

const getGif = async () => {
  const response = await api.get({
    api_key: "fXJO8BrCO2rg2N1g9817WONhAps78CsS",
    limit: "5",
    q: "bob",
  });
  return response;
};

export { getGif };
