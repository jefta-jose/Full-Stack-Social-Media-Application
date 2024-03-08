import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({

        getPosts:builder.query({
            query:() => 'posts',
            providesTags: ['Posts']
        }),

        getOnePost:builder.query({
            query:(post_id)=> `posts/${post_id}`,
            providesTags: ['Posts']
        }),

        getOnePhotoPost:builder.query({
            query:(post_id)=> `posts/photo/${post_id}`,
            providesTags: ['Posts']
        }),

        //Check this!
        getOneVideoPost:builder.query({
            query:(post_id)=> `posts/videos/${post_id}`,
            providesTags: ['Posts']
        }),

        getOnePostUID: builder.query({
            query:(UserID) => `posts/uid/${UserID}`,
            providesTags: ['Posts']
        }),

        addPost:builder.mutation({
            query:(post) => ({
                url: 'posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags:['Posts']
        }),

        updatePost: builder.mutation({
            query:(post)=>({
                url: `post/update/${post.postID}`,
                method: 'PUT',
                body: post

            }),
            invalidatesTags: ['Posts']
        }),

        deletePost: builder.mutation({
            query:(postID) => ({
                url: `post/delete/${postID}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Posts']
        })
    })
})

export const { useGetPostsQuery, useGetOnePhotoPostQuery, useGetOnePostUIDQuery, useGetOneVideoPostQuery, useGetOnePostQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation}=postApi