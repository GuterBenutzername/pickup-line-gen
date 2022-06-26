import { combineReducers } from "@reduxjs/toolkit";
import handleInputHellChange from "./inputHell";
const rootReducer = combineReducers({
  inputHell: handleInputHellChange,
});
export default rootReducer;
