import { combineReducers } from 'redux';


import auth from './auth';
import userReducer from "./user"    
import complaintsReducer from "./Complaints"
import SuggestionsReducer from "./Suggestion"
export const reducers = combineReducers({authData:auth ,users:userReducer , complaints:complaintsReducer , suggestions:SuggestionsReducer});
