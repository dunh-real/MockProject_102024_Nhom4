import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { token } from "../slice/auth";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://api.escuelajs.co/api/v1/",
    baseUrl: "http://127.0.0.1:8000/api/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Category", "Product", "User", "DayOff"],
  endpoints: () => ({}),
});
