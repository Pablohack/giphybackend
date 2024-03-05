import { ApiRepository } from "../../repository/api";
import { getGif } from "./giphy.type";

const api = new ApiRepository("http://api.giphy.com/v1/gifs/search");

const getGif = async ({ limit, q, offset }: getGif) => {
  const response = await api.get({
    api_key: "fXJO8BrCO2rg2N1g9817WONhAps78CsS",
    limit,
    q,
    offset,
  });
  return response;
};

export { getGif };
