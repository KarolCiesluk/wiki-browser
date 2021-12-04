import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "initial",
  article: null,
  languages: null,
  showLanguages: false,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    fetchArticle: state => {
      state.status = "loading";
      state.showLanguages = false;
    },
    fetchArticleSuccess: (state, { payload: data }) => {
      state.article = data.article;
      state.languages = data.languages;
      state.status = "success";
    },
    fetchArticleError: state => {
      state.status = "error";
    },
    toggleShowLanguages: state => {
      state.showLanguages = !state.showLanguages;
    },
    clearArticleData: () => initialState,
  },
});

export const {
  fetchArticle,
  fetchArticleSuccess,
  fetchArticleError,
  toggleShowLanguages,
  clearArticleData,
} = articleSlice.actions;

const selectArticleState = state => state.article;

export const selectArticleStatus = state =>
  selectArticleState(state).status;

export const selectArticle = state =>
  selectArticleState(state).article;

export const selectArticleLanguages = state =>
  selectArticleState(state).languages;

export const selectAreLanguagesAvailable = state =>
  !!selectArticleLanguages(state)?.length;

export const selectShowLanguages = state =>
  selectArticleState(state).showLanguages;

export default articleSlice.reducer;
