import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const photoApi = createApi({
    reducerPath: 'photoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    tagTypes: ['Photo'],
    endpoints: (builder) => ({
        getPhotoComment: builder.query({
            query: () => 'photo',
            providesTags: ['Photo']
        }),
        addPhotoComment: builder.mutation({
            query: (photo) => ({
                url: 'photos',
                method: 'POST',
                body: photo
            }),
            invalidatesTags: ['Photo']
        }),
        updatePhotoComment: builder.mutation({
            query: ({ id, photo }) => ({
                url: `photo/${id}`,
                method: 'PUT',
                body: photo
            }),
            invalidatesTags: ['Photo'],
        }),
        deletePhotoComment: builder.mutation({
            query: (id) => ({
                url: `photo/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Photo'],
        })
    })
});

export const { useGetPhotoCommentQuery, useAddPhotoCommentMutation, us } = photoApi;

