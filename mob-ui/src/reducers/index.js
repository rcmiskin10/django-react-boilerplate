import { combineReducers } from 'redux';
import auth from "./auth";

const mobApp = combineReducers({
  auth
})

export default mobApp;