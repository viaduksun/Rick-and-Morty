import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import characters from './characters/charactersReducer';
import episodes from './episodes/episodesReducer';
import locations from './locations/locationsReducer';
import watchList from './watchList/watchListReducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const rootReducer = combineReducers({
  characters,
  episodes,
  locations,
  watchList
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
);

export default store;