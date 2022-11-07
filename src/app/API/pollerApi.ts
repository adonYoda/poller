import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

export const pollerApi = createApi({
    reducerPath: 'pollerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getPoller: builder.query({
      query: (id) => ({ url:`/api/questions/${id}/`,
      method: 'GET'})
       }),
  }),
});

export const { useGetPollerQuery } = pollerApi;

