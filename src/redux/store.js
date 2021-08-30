import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { phonebookReducer } from './phonebook/phonebook-reducers'

const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
  reducer: phonebookReducer,
  middleware,
  devTools: true,
})

export default store
