import { getListData } from "common/wikipediaAPI";

export const getSuggestions = async (query) => {
  return await getListData({
    query,
    endpoint: "search/title",
    limit: 3,
  });
};