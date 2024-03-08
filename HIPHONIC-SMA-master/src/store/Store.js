//import react features
import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';
import {userApi} from '../features/user/userApi'
import authReducer from "../features/user/authSllice";

//import the APIs
import { photoApi } from '../features/Photos/Photoapi';
import { friendApi } from '../features/friends/friendApi';
import { notificationApi } from '../features/notifications/notificationApi';
import { postApi } from '../features/posts/postApi';
import { commentApi } from '../features/Comments/CommentsApi';
import { statusApi } from '../features/timeline/TimelineApi';
import { likeApi } from '../features/Likes/LikesApi';
import { groupApi } from '../features/groups/groupApi';
import { groupMembersApi } from '../features/groupMembers/groupMembersApi';
import { groupPostApi } from '../features/groups/groupPostApi';
import { videoApi } from '../features/Video/videoApi';
import { videoCategoryApi } from '../features/videoCategory/videoCategoryApi';
import {eventPostApi} from  '../features/Events/EventPostApi';
import { eventAttendeeApi } from '../features/EventAtendee/EventAtendeeApi';


export const store=configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer,
        [photoApi.reducerPath]:photoApi.reducer,
        [friendApi.reducerPath]:friendApi.reducer,
        [postApi.reducerPath]:postApi.reducer,
        [notificationApi.reducerPath]:notificationApi.reducer,
        [commentApi.reducerPath]: commentApi.reducer,
        [statusApi.reducerPath]:statusApi.reducer,
        [likeApi.reducerPath]:likeApi.reducer,
        [groupApi.reducerPath]:groupApi.reducer,
        [groupMembersApi.reducerPath]:groupMembersApi.reducer,
        [groupPostApi.reducerPath]:groupPostApi.reducer,
        [videoApi.reducerPath]:videoApi.reducer,
        [videoCategoryApi.reducerPath]:videoCategoryApi.reducer,
        [eventPostApi.reducerPath]:eventPostApi.reducer,
        [eventAttendeeApi.reducerPath]:eventAttendeeApi.reducer
    },

    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(
        userApi.middleware,
        photoApi.middleware,
        friendApi.middleware,
        notificationApi.middleware,
        postApi.middleware,
        commentApi.middleware,
        statusApi.middleware,
        groupApi.middleware,
        likeApi.middleware,
        groupMembersApi.middleware,
        groupPostApi.middleware,
        videoApi.middleware,
        videoCategoryApi.middleware,
        eventPostApi.middleware, 
        eventAttendeeApi.middleware
        )
    }, 
)

setupListeners(store.dispatch)