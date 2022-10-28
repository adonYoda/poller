import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constants";

export const pollerApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    endpoints: (build) => ({
        getPoller: build.query({
            query: (args)=> {
                return {
                    url: ``,
                    method: "GET",
                }
            }
        })
    })
})

export const {useGetPollerQuery} = pollerApi;