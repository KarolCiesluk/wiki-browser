import { getArticleData } from "common/wikipediaAPI";

export const getArticle = async ({ title, language }) => {
  return await getArticleData({
    title,
    language,
    endpoint: "/with_html",
  });
};

export const getArticleLanguages = async ({ title, language }) => {
  return await getArticleData({
    title,
    language,
    endpoint: "/links/language",
  });
};