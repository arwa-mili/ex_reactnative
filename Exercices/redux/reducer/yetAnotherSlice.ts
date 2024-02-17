import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const api2 = createApi({
    reducerPath: 'api2',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    refetchOnFocus: true,
    refetchOnReconnect: true,
    
    endpoints: (builder) => ({
      getUsers: builder.query({
          query: () => ({
              url: '/users/',
              method: 'Get',
          }),
      }),
      createUser: builder.mutation({
        query: (body) => ({
          url: '/users',
          method: 'POST',
          body,
        }),
      }),
    }),
  });


  export const {useGetUsersQuery,useCreateUserMutation} = api2