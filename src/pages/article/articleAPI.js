import { getArticleData } from "common/wikipediaAPI";

export const getArticle = async ({ title, language }) => {
  return await getArticleData({
    title,
    language,
    endpoint: "/bare",
  });
};

export const getArticleLanguages = async ({ title, language }) => {
  return await getArticleData({
    title,
    language,
    endpoint: "/links/language",
    throwError: false,
  });
};