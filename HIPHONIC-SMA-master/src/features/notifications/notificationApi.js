import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notificationApi=createApi({
    reducerPath: "notificationApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['Notifications'],
    endpoints: (builder)=>({

        getNotifications:builder.query({
            query:()=> 'notifications',
            providesTags: ['Notifications']
        }),

        getNotification:builder.query({
            query:(userID)=> `notifications/user/${userID}`,
            providesTags: ['Notifications']
        }),
        patchNottification:builder.mutation({
            query:(notification)=>({
                url: `notifications/${notification.NotificationID}`,
                method: 'PATCH',
                body: notification
            }),
            invalidatesTags:['Notifications']
        })
    })
})

export const {useGetNotificationsQuery,useGetNotificationQuery,usePatchNottificationMutation}=notificationApi