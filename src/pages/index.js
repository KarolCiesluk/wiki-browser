export { default as Home } from "./home";
export {
  default as Article,
  watchFetchArticle,
  articleReducer
} from "./article";
export {
  default as Articles,
  articlesReducer,
  watchFetchArticles
} from "./articles";
export {
  default as SearchHistory,
  watchSearchHistoryChange,
  historyReducer
} from "./searchHistory";
