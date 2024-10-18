import { api } from "..";
const requestApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getRequests: builder.query({
            query: () => ({
                url: "/products",
                method: "GET",
            }),
            providesTags: ["Product"]
        }),
        getRequest: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET",
            }),
            providesTags: ["Product"]
        }),
    }),
});
export const{useGetRequestsQuery,useGetRequestQuery}=requestApi;