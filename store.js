import { configureStore } from '@reduxjs/toolkit';
//port cakereducer from './cakereducer';
import rootReducer from '../rootReducer';
import logger from 'redux-logger'

const store =configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),// to print in console      
})

export default store