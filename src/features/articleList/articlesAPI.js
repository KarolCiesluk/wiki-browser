import { getListData } from "common/wikipediaAPI";

export const getArticles = async (query) => {
  return await getListData({
    query,
    endpoint: "search/page",
    limit: 100
  });
};