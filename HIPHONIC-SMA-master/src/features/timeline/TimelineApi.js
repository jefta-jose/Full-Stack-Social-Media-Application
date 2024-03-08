import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const statusApi = createApi({
  reducerPath: 'statusApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  tagTypes: ['statuses'],
  endpoints: (builder) => ({
    getStatus: builder.query({
      query: () => 'status',
      providesTags: ['statuses'],
    }),
    addStatus: builder.mutation({
      query: (status) => ({
        url: 'status',
        method: 'POST',
        body: status,
      }),
      invalidatesTags: ['statuses'],
    }),
    updateStatus: builder.mutation({
      query: (status) => ({
        url: `status/${status.StatusID}`,
        method: 'PUT',
        body: status,
      }),
      invalidatesTags: ['statuses'],
    }),

    deleteStatus: builder.mutation({
      query: (StatusID) => ({
        url: `status/delete/${StatusID}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['statuses'],
    }),
  }),
});

export const{
  useGetStatusQuery,
  useAddStatusMutation,
  useUpdateStatusMutation,
  useDeleteStatusMutation,
} = statusApi;
