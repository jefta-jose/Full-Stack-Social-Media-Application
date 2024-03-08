import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi=createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['Users'],
    endpoints: (builder)=>({

        getUsers:builder.query({
            query:()=> 'users',
            providesTags: ['Users']
        }),
        getNonFriendsUsers:builder.query({
            query:()=> 'users/nonfriend',
            providesTags: ['Users']
        }),
        getUser:builder.query({
            query:(userID)=> `users/single/${userID}`,
            providesTags: ['Users']
        }),

        addUser:builder.mutation({
            query:(user)=>({
                url: 'users/register',
                method:'POST',
                body: user
            }),
            invalidatesTags:['Users']
        }),

        authenticateUser:builder.mutation({
            query:(user)=>({
                url: 'users/login',
                method:'POST',
                body: user
            }),
              onSuccess: (response, variables, api) => {
    const { token, user } = response;
    storeToken(token);
    storeUser(user);
  },
            invalidatesTags:['Users']
        }),

        updateUser:builder.mutation({
            query:(user)=>({
                url: `users/update/${user.UserID}`,
                method: 'PUT',
                body: user
            }),
            invalidatesTags: ['Users']
        }),

        updatePassword:builder.mutation({
            query:(user)=>({
                url: `users/update/${user.userID}`,
                method: 'PATCH',
                body: user
            }),
            invalidatesTags: ['Users']
        }),

        deleteUser: builder.mutation({
            query:(userID)=>({
                url: `user/delete/${userID}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users']
        })
    })
})


export const {useGetUsersQuery,useGetUserQuery,useGetNonFriendsUsersQuery,useAddUserMutation,useAuthenticateUserMutation,useUpdateUserMutation,useUpdatePasswordMutation,useDeleteUserMutation}=userApi