import { createReducer, createAction } from '@reduxjs/toolkit'

export const filterContact = createAction('phonebook/filterContacts')

export const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
})
