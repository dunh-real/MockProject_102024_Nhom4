import { api } from "..";

const dayOffApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDayOffs: builder.query({
      query: ({ page, page_size }) => ({
        url: "/admin/dayoffs",
        method: "GET",
        params: { page, page_size },
      }),
      providesTags: ["DayOff"],
    }),
    getEmployeeDayOffs: builder.query({
      query: ({ id, page, page_size }) => ({
        url: `/employee/dayoffs/${id}`,
        method: "GET",
        params: { page, page_size },
      }),
      providesTags: ["DayOff"],
    }),
    getDayOff: builder.query({
      query: (id) => ({
        url: `/admin/dayoffs/${id}`,
        method: "GET",
      }),
      providesTags: ["DayOff"],
    }),
    createDayOff: builder.mutation({
      query: (dayOffData) => ({
        url: "/employee/dayoffs",
        method: "POST",
        body: dayOffData, // Pass the request body with day-off data
      }),
      invalidatesTags: ["DayOff"], // Invalidate tags to refresh data if necessary
    }),
    updateDayOff: builder.mutation({
      query: ({ id, ...dayOffData }) => ({
        url: `/employee/dayoffs/${id}`,
        method: "PUT",
        // params: { _method: "PUT" },
        body: dayOffData,
      }),
      invalidatesTags: ["DayOff"],
    }),
    deleteDayOff: builder.mutation({
      query: (id) => ({
        url: `/admin/dayoffs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["DayOff"],
    }),
    approveDayOff: builder.mutation({
      query: ({ id, is_approved }) => ({
        url: `/admin/dayoffs/${id}/approve`,
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
  useUpdateDayOffMutation,
  useDeleteDayOffMutation,
  useApproveDayOffMutation,
} = dayOffApi;
