import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videoCategoryApi = createApi({
    reducerPath: "videoCategoryApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['Category'],
    endpoints: (builder) => ({

    //Create a new video item
    addCategory: builder.mutation({
            query:(category) => ({
                url: 'category',
                method: 'POST',
                body: category
        }),
        invalidatesTags:['Category']
    }),

    //Fetch all the videos
    getCategories: builder.query({
        query:() => 'Category',
        providesTags: ['Category']
    }),

    //Delete a categoryID by categoryID
    deleteCategory: builder.mutation({
        query:(categoryID) => ({
            url: `category/${categoryID}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Category']
    }),
    
    })
})

export const { useAddCategoryMutation, useGetCategoriesQuery, useDeleteCategoryMutation } = videoCategoryApi;