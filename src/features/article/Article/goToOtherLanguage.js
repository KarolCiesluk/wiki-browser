export const goToOtherLanguage = ({ key, languageCode }) => {
  return `/article/${key}?language=${languageCode}`;
};