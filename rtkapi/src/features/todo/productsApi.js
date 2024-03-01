import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
        query: () => "products"
      }),
    }),
  })



  export const { getAllProductsQuery} = productsApi;