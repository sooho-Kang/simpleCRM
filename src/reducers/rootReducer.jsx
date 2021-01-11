import { combineReducers } from "redux";
import visibilityReducer from "./visibilityReducer";
import charactersReducer from "./charactersReducer";
const rootReducer = combineReducers({ visibilityReducer, charactersReducer });

export default rootReducer;
