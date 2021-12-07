import { defaultLanguageCode } from "common";

const getWikipediaData = async ({
  language = defaultLanguageCode,
  endpoint,
  queryParams = ""
}) => {
  const API_URL = `https://${language}.wikipedia.org/w/rest.php/v1/`;

  const response = await fetch(`${API_URL}${endpoint}${queryParams}`);

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};

export const getListData = async ({ query, endpoint, limit }) => {
  const params = new URLSearchParams();
  params.set("q", query);
  params.set("limit", limit);

  return await getWikipediaData({
    endpoint,
    queryParams: `?${params.toString()}`,
  });
};

export const getArticleData = async ({ title, language, endpoint }) => {
  return await getWikipediaData({
    endpoint: `page/${title}${endpoint}`,
    language,
  });
};