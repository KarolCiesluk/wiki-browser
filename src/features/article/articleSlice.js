import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "initial",
  article: null,
  languages: null
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    fetchArticle: state => {
      state.status = "loading";
    },
    fetchArticleSuccess: (state, { payload: data }) => {
      state.article = data.articles;
      state.languages = data.languages;
      state.status = "success";
    },
    fetchArticleError: state => {
      state.status = "error";
    },
    clearArticleData: () => initialState,
  },
});

export const {
  fetchArticle: fetch,
  fetchArticleSuccess: fetchSuccess,
  fetchArticleError: fetchError,
  clearArticleData: clear,
} = articleSlice.actions;

const selectArticleState = state => state.article;

export const selectArticleStatus = state =>
  selectArticleState(state).status;

export const selectArticleData = state =>
  selectArticleState(state).article;

export const selectArticleLanguages = state =>
  selectArticleState(state).languages;

export default articleSlice.reducer;
