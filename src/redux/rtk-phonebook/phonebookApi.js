import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  tagTypes: ['contacts'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4040' }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: '/contacts',
        method: 'POST',
        body: { ...contact },
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
})

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phonebookApi
