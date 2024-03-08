// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const eventApi = createApi({
//     reducerPath: 'eventApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
//     tagTypes: ['Event'],
//     endpoints: (builder) => ({
//         getEvents: builder.query({
//             query: () => 'event', 
//             providesTags: ['Event']
//         }),
//         addEvent: builder.mutation({
//             query: (EventID) => ({
//                 url: `events/single/${EventID}`, 
//                 method: 'POST',
//                 body: event
//             }),
//             invalidatesTags: ['Event']
//         }),
//         updateEvent: builder.mutation({
//             query: ({ id, event }) => ({
//                 url: `event/${id}`, 
//                 method: 'PUT',
//                 body: event
//             }),
//             invalidatesTags: ['Event'],
//         }),
//         deleteEvent: builder.mutation({
//             query: (id) => ({
//                 url: `event/${id}`, 
//                 method: 'DELETE'
//             }),
//             invalidatesTags: ['Event'],
//         })
//     })
// });

// export const { useGetEventsQuery, useAddEventMutation, useDeleteEventMutation, useUpdateEventMutation } = eventApi;

