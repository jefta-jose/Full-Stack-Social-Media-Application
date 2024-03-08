import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const photoApi = createApi({
    reducerPath: 'photoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    tagTypes: ['Photo'],
    endpoints: (builder) => ({
        getPhotos: builder.query({
            query: (UserID) => `photos/${UserID}`,
            providesTags: ['Photo']
        }),
        addPhoto: builder.mutation({
            query: (photo) => ({
                url: 'photos',
                method: 'POST',
                body: photo
            }),
            invalidatesTags: ['Photo']
        }),
        updatePhoto: builder.mutation({
            query: ({ id, photo }) => ({
                url: `photo/${id}`,
                method: 'PUT',
                body: photo
            }),
            invalidatesTags: ['Photo'],
        }),
        getPhotosByUserID: builder.query({
            query: (UserID) => `photo/${UserID}`,
            providesTags: ["Photo"]
          }),
        deletePhoto: builder.mutation({
            query: (id) => ({
                url: `photo/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Photo'],
        }),
        getAllPhotos: builder.query({
            query: () => 'photos',
            providesTags: ['Photo']
        })
    })
});

export const { useGetPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation, useUpdatePhotoMutation, useGetPhotosByUserIDQuery, useGetAllPhotosQuery } = photoApi;

