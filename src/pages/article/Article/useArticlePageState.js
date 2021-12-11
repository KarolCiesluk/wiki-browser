import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { defaultLanguageCode, useQueryParameter } from "common";
import { getArticle, getArticleLanguages } from "../articleAPI";
import { languageQueryName } from "./languageQueryName";

export const useArticlePageState = () => {
  const [status, setStatus] = useState("initial");
  const [article, setArticle] = useState(null);
  const [languages, setLanguages] = useState(null);

  const { title } = useParams();
  const language = useQueryParameter(languageQueryName) || defaultLanguageCode;

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    (async () => {
      setStatus("loading");

      try {
        const [articleData, languagesData] = await Promise.all([
          getArticle({ title, language, signal }),
          getArticleLanguages({ title, language, signal }),
        ]);

        setLanguages(languagesData);
        setArticle(articleData);
        setStatus("success");
      } catch (error) {
        if (!signal.aborted) {
          setStatus("error");
          console.error("error");
        }
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [title, language]);

  return [status, article, languages];
};