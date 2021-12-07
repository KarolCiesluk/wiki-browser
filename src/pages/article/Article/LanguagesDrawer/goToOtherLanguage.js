import { toArticle } from "core";
import { languageQueryName } from "../languageQueryName";

export const goToOtherLanguage = ({ key, languageCode }) => {
  return `${toArticle(key)}?${languageQueryName}=${languageCode}`;
};