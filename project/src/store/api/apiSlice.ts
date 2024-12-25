import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    getPrograms: builder.query({
      query: () => '/programs',
    }),
    getNews: builder.query({
      query: () => '/news',
    }),
    getGallery: builder.query({
      query: () => '/gallery',
    }),
  }),
});