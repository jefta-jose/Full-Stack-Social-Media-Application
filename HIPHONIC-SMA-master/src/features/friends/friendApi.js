import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const friendApi = createApi({
  reducerPath: 'friendApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  tagTypes: ['friendships'],
  endpoints: (builder) => ({
    getFriends: builder.query({
      query: (User1ID) => `friendships/user/${User1ID}`,
      providesTags: ['friendships'],
    }),
    addFriendship: builder.mutation({
      query: (friendship) => ({
        url: 'friendships',
        method: 'POST',
        body: friendship,
      }),
      invalidatesTags: ['friendships'],
    }),
    updateFriendship: builder.mutation({
      query: (friendship) => ({
        url: `friendships/${friendship.FriendshipID}`,
        method: 'PUT',
        body: friendship,
      }),
      invalidatesTags: ['friendships'],
    }),

    deleteFriendship: builder.mutation({
      query: (FriendshipID) => ({
        url: `friendships/${FriendshipID}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['friendships'],
    }),
  }),
});

export const{
  useGetFriendsQuery,
  useAddFriendshipMutation,
  useUpdateFriendshipMutation,
  useDeleteFriendshipMutation,
} = friendApi;
