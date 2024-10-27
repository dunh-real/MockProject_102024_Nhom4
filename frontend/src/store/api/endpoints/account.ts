import { api } from "..";

const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: ({ page, page_size }) => ({
        url: "/staffs",
        method: "GET",
        params: { page, page_size },
      }),
      providesTags: ["Staff"],
    }),
    getAccount: builder.query({
      query: (id) => ({
        url: `/staffs/${id}`,
        method: "GET",
      }),
      providesTags: ["Staff"],
    }),
    createAccount: builder.mutation({
      query: (accountData) => ({
        url: "/staffs",
        method: "POST",
        body: accountData,
      }),
      invalidatesTags: ["Staff"],
    }),
    editAccount: builder.mutation({
      query: ({ accountData, id }) => ({
        url: `/staffs/${id}`,
        method: "PUT",
        body: accountData,
      }),
      invalidatesTags: ["Staff"],
    }),
    deleteAccount: builder.mutation({
      query: (id) => ({
        url: `/staffs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Staff"],
    }),
  }),
});

export const {
  useGetAccountsQuery,
  useGetAccountQuery,
  useCreateAccountMutation,
  useEditAccountMutation,
  useDeleteAccountMutation,
} = accountApi;
