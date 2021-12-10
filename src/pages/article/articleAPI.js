import { getArticleData } from "common/wikipediaAPI";

export const getArticle = async ({ title, language, signal }) => {
  return await getArticleData({
    title,
    language,
    endpoint: "/bare",
    signal,
  });
};

export const getArticleLanguages = async ({ title, language, signal }) => {
  return await getArticleData({
    title,
    language,
    endpoint: "/links/language",
    throwError: false,
    signal,
  });
};