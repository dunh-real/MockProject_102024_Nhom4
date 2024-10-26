import { api } from "..";

const dayOffApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDayOffs: builder.query({
      query: ({ page, page_size }) => ({
        url: "/dayoffs",
        method: "GET",
        params: { page, page_size },
      }),
      providesTags: ["DayOff"],
    }),
    getEmployeeDayOffs: builder.query({
      query: ({ id, page, page_size }) => ({
        url: `/dayoffs/employee/${id}`,
        method: "GET",
        params: { page, page_size },
      }),
      providesTags: ["DayOff"],
    }),
    getDayOff: builder.query({
      query: (id) => ({
        url: `/dayoffs/${id}`,
        method: "GET",
      }),
      providesTags: ["DayOff"],
    }),
    createDayOff: builder.mutation({
      query: (dayOffData) => ({
        url: "/dayoffs",
        method: "POST",
        body: dayOffData, // Pass the request body with day-off data
      }),
      invalidatesTags: ["DayOff"], // Invalidate tags to refresh data if necessary
    }),
    deleteDayOff: builder.mutation({
      query: (id) => ({
        url: `/dayoffs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["DayOff"],
    }),
    approveDayOff: builder.mutation({
      query: ({ id, is_approved }) => ({
        url: `/dayoffs/${id}/approve`,
        method: "PATCH",
        params: { is_approved },
      }),
      invalidatesTags: ["DayOff"],
    }),
  }),
});

export const {
  useGetDayOffsQuery,
  useGetEmployeeDayOffsQuery,
  useGetDayOffQuery,
  useCreateDayOffMutation,
  useDeleteDayOffMutation,
  useApproveDayOffMutation,
} = dayOffApi;
