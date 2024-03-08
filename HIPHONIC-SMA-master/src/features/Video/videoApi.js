import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videoApi = createApi({
    reducerPath: "videoApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['Video'],
    endpoints: (builder) => ({

    //Create a new video item
    addVideo: builder.mutation({
            query:(video) => ({
                url: 'video',
                method: 'POST',
                body: video
        }),
        invalidatesTags:['Video']
    }),

    //Fetch all the videos
    getVideos: builder.query({
        query:() => 'Video',
        providesTags: ['Video']
    }),

    // Fetch new video item
    getOneVideo: builder.query({
        query:(videoID) => `video/vid/${videoID}`,
        providesTags: ['Video']
    }),

    // Fetch new video item by userID
    getUserVideo: builder.query({
        query:(UserID) => `video/uid/${UserID}`,
        providesTags: ['Video']
    }),

    //Delete a video by videoID
    deleteVideo: builder.mutation({
        query:(videoID) => ({
            url: `video/delete/${videoID}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Video']
    }),
    
    })
})

export const { useAddVideoMutation, useGetVideosQuery, useGetOneVideoQuery, useGetUserVideoQuery, useDeleteVideoMutation } = videoApi;