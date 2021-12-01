import { getArticleData } from "common/wikipediaAPI";

export const getArticle = async ({ value: title, language }) => {
  return await getArticleData({
    title,
    language,
    endpoint: "/with_html",
  });
};

export const getArticleLanguages = async ({ value: title, language }) => {
  return await getArticleData({
    title,
    language,
    endpoint: "/links/language",
  });
};