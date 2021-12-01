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
      state.article = data.article;
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
  fetchArticle,
  fetchArticleSuccess,
  fetchArticleError,
  clearArticleData,
} = articleSlice.actions;

const selectArticleState = state => state.article;

export const selectArticleStatus = state =>
  selectArticleState(state).status;

export const selectArticle = state =>
  selectArticleState(state).article;

export const selectArticleLanguages = state =>
  selectArticleState(state).languages;

export default articleSlice.reducer;
