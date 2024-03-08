import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const likeApi = createApi({
    reducerPath: "likeApi",
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/'}),
    tagTypes: ['Likes'],
    endpoints: (builder) => ({

        addLike:builder.query({
            query:() => ({
                url: 'likes',
                method:'POST',
                body: like
            }),
            invalidatesTags:['Likes']
        }),

        getLikes: builder.query({
            query:() => 'likes',
            providesTags: ['Likes']
        }),

        getPostLikes:builder.query({
            query:(post_id) => `/likes/pid/${post_id} `,
            providesTags: ['likes']
        }),

        getUserLikes:builder.query({
            query:(UserID) => `/likes/uid/${UserID}`,
            providesTags: ['Likes']
        }),
    })
})
export const { useAddLikeQuery ,useGetLikesQuery, useGetPostLikesQuery, useGetUserLikesQuery } = likeApi