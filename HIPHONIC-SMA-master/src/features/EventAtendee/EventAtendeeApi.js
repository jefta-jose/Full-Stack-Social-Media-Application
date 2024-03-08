import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eventAttendeeApi = createApi({
    reducerPath: 'eventAttendeeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    tagTypes: ['EventAttendee'],
    endpoints: (builder) => ({
        createEventAttendee: builder.mutation({
            query: (eventAttendee) => ({
                url: `eventAttendee`, 
                method: 'POST',
                body: eventAttendee
            }),
            invalidatesTags: ['EventAttendee']
        }),
        getEventAttendees: builder.query({
            query: (AttendeeID) => `eventAttendee/${AttendeeID}`, 
            providesTags: (result, error, AttendeeID) => [
                { type: 'EventAttendee', id: AttendeeID }
            ]
        }),
        deleteEventAttendee: builder.mutation({
            query: ({ EventID, attendeeId }) => ({
                url: `eventAttendee/${EventID}/${attendeeId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['EventAttendee']
        }),
        getEventAttendeesForEvent: builder.query({
            query: (EventID) => `event/${EventID}/attendees`, 
            providesTags: (result, error, EventID) => [
                { type: 'EventAttendee', id: EventID }
            ]
        }),
        getEventsRegisteredByUser: builder.query({
            query: (AttendeeID) => `eventAttendees/user/${AttendeeID}`, 
            providesTags: ['EventAttendee']
            
        })
    })
});

export const {  useGetEventsRegisteredByUserQuery, useCreateEventAttendeeMutation, useGetEventAttendeesQuery, useDeleteEventAttendeeMutation, useGetEventAttendeesForEventQuery } = eventAttendeeApi;
