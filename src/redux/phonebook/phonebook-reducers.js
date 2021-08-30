import { createReducer, combineReducers } from '@reduxjs/toolkit'
import { addContact, deleteContact, filterContact } from './phonebook-actions'

const contacts = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
})

const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
})
export const phonebookReducer = combineReducers({
  contacts,
  filter: filterReducer,
})
