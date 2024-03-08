import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventPostApi = createApi({
  reducerPath: "eventApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  tagTypes: ['eventPosts'],
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => 'events',
      providesTags: ['eventPosts']
    }),

    getEventPosts: builder.query({
      query: (EventPostID) => `eventPosts/${EventPostID}`,
      providesTags: ['eventPosts']
    }),

    addEvent: builder.mutation({
      query: (eventPosts) => ({
        url: 'events',
        method: 'POST',
        body: eventPosts
      }),
      invalidatesTags: ['eventPosts']
    }),

    updateEvent: builder.mutation({
      query: (eventPosts) => ({
        url: `eventPosts/update/${eventPosts.EventPostsID}`,
        method: 'PUT',
        body: eventPosts
      }),
      invalidatesTags: ['events']
    }),

    // deleteEvent: builder.mutation({
    //   query: (EventID) => ({
    //     url: `events/delete/${EventID}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['eventPosts']
    // })
  })
});

export const {
  useGetEventsQuery,
  useGetEventPostsQuery,
  useAddEventMutation,
  useUpdateEventMutation
} = eventPostApi;
