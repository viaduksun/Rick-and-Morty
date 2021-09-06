import { SET_LOCATION_CURRENT_PAGE, SET_LOCATION_PAGES, SET_LOCATION_QUERY } from "./types";

export const setLocationPages = (pages) => ({
  type: SET_LOCATION_PAGES,
  payload: pages
})
export const setLocationCurrentPage = (page) => ({
  type: SET_LOCATION_CURRENT_PAGE,
  payload: page
})
export const setLocationQueryAction = (query) => ({
  type: SET_LOCATION_QUERY,
  payload: query
})