import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { phonebookApi } from './rtk-phonebook/phonebookApi'
import { filterReducer } from './rtk-phonebook/filterReducer'

export const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    filterReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    phonebookApi.middleware,
  ],
})

setupListeners(store.dispatch)
