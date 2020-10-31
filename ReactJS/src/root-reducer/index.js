import { combineReducers } from "redux";
import {movieListReducer} from '../containers/Home/HomePage/components/MovieList/modules/reducer';
const rootReducer = combineReducers({
  movieListReducer
    // movieListReducer 
    // moviesReducer, // moviesReducer: moviesReducer
    // movieDetailReducer,
    // authReducer,
    // addUserReducer
  });

export default rootReducer;