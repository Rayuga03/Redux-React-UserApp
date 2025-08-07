//port { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import cakereducer from "./cake/cakereducer";
import iceCreamReducer from "./iceCream/icecreamreducer";
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakereducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export default rootReducer