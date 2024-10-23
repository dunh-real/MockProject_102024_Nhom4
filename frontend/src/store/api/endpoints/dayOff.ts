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
    getDayOff: builder.query({
      query: (id) => ({
        url: `/dayoffs/${id}`,
        method: "GET",
      }),
      providesTags: ["DayOff"],
    }),
    deleteDayOff: builder.mutation({
      query: (id) => ({
        url: `/dayoffs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["DayOff"],
    }),
  }),
});

export const {
  useGetDayOffsQuery,
  useGetDayOffQuery,
  useDeleteDayOffMutation,
} = dayOffApi;
