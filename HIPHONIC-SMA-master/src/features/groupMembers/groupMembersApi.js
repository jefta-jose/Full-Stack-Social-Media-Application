import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groupMembersApi=createApi({
    reducerPath: "groupMembersApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['GroupMembers'],
    endpoints: (builder)=>({

        getGroupMembers:builder.query({
            query:(GroupID)=>`members/${GroupID}`,
            providesTags: ['GroupMembers']
        }),

        getGroupMember:builder.query({
            query:(GroupID)=>`members/single/${GroupID}`,
            providesTags: ['GroupMembers']
        }),

        addGroupMember:builder.mutation({
            query:(GroupMembers)=>({
                url: 'members',
                method:'POST',
                body: GroupMembers
            }),
            invalidatesTags:['GroupMembers']
        }),

        updateGroupMember:builder.mutation({
            query:(GroupMembers)=>({
                url: `members/update/${GroupMembers.MemberID}`,
                method: 'PUT',
                body: group
            }),
            invalidatesTags: ['GroupMembers']
        }),

        deleteGroupMember: builder.mutation({
            query:(MemberID)=>({
                url: `members/delete/${MemberID}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['members']
        })
    })
})

export const {useGetGroupMembersQuery,useGetGroupMemberQuery,useAddGroupMemberMutation,useUpdateGroupMemberMutation,useDeleteGroupMemberMutation}=groupMembersApi