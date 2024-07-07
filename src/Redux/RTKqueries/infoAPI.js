import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:4000";

export const infoAPI = createApi({
  reducerPath: "infoAPI",
  tagTypes: ["Information"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    addToInformation: builder.mutation({
      query: (loginPassword) => ({
        method: "POST",
        url: "/Information",
        body: loginPassword,
      }),
      invalidatesTags: ["Information"],
    }),
  }),
});

export const { useAddToInformationMutation } = infoAPI;
