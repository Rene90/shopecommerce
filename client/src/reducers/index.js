import { useReducer } from "react";
import { combineReducers } from "redux";
import {userReducer} from "./userReducer"


 const rootReducer = combineReducers({
    user : useReducer
})

export default rootReducer