import { api } from "..";

const staffApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStaffs: builder.query({
      query: ({ page, page_size }) => ({
        url: "/staffs",
        method: "GET",
        params: { page, page_size },
      }),
      providesTags: ["Staff"],
    }),
    getStaff: builder.query({
      query: (id) => ({
        url: `/staffs/${id}`,
        method: "GET",
      }),
      providesTags: ["Staff"],
    }),
  }),
});

export const { useGetStaffsQuery, useGetStaffQuery } = staffApi;
