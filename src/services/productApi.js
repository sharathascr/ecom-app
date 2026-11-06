import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7071/",
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "products",
    }),
  }),
});
