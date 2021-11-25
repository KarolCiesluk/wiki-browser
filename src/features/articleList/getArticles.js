import { getListData } from "common/getListData";

export const getArticles = async (value) => {
  return await getListData({
    value,
    endpoint: "search/page",
    limit: 10
  });
};