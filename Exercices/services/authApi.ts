import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({

      query: (body: { email: string; password: string }) => {
        return {
          url: "/auth/login",
          method: "post",
          body,
        };

      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi