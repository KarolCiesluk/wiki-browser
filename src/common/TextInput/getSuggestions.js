import { getListData } from "common/getListData";

export const getSuggestions = async (value) => {
  return await getListData({
    value,
    endpoint: "search/title",
    limit: 3
  });
};