import { SET_EPISODE_CURRENT_PAGE, SET_EPISODE_PAGES, SET_EPISODE_QUERY } from "./types";

export const setEpisodePages = (pages) => ({
  type: SET_EPISODE_PAGES,
  payload: pages
})
export const setEpisodeCurrentPage = (pages) => ({
  type: SET_EPISODE_CURRENT_PAGE,
  payload: pages
})
export const setEpisodeQueryAction = (query) => ({
  type: SET_EPISODE_QUERY,
  payload: query
})