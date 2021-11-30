import { getArticleData } from "common/wikipediaAPI";

export const getArticle = async (payload) => {
  console.log("article:", payload);
  return await getArticleData({
    title: payload.articleKey,
    language: payload.language,
    endpoint: "/with_html",
  });
};

export const getArticleLanguages = async (payload) => {
  console.log("languages:", payload);
  return await getArticleData({
    title: payload.articleKey,
    language: payload.language,
    endpoint: "/links/language",
  });
};