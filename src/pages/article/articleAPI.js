import { getArticleData } from "common/wikipediaAPI";

export const getArticle = async ({ value: title, language }) => {
  return await getArticleData({
    title,
    language,
    endpoint: "/bare",
  });
};

export const getArticleLanguages = async ({ value: title, language }) => {
  return await getArticleData({
    title,
    language,
    endpoint: "/links/language",
    throwError: false,
  });
};