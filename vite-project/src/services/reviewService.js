import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { bUrl } from "../constant";

export const reviewApi = createApi({
  reducerPath: "reviewApi", //reducerPath must be unique
  baseQuery: fetchBaseQuery({
    baseUrl: bUrl,
  }),
  //1)creating tag
  tagTypes: ["readReview"],

  //in get method write query and for other method write mutation
  endpoints: (builder) => ({
    //making api for review
    readReview: builder.query({
      query: () => {
        return {
          url: "/review",
          method: "GET",
        };
      },
      //2)providing tag
      providesTags: ["readReview"],
    }),

    readReviewById: builder.query({
      query: (id) => {
        return {
          url: `/review/${id}`,
          method: "GET",
        };
      },
      providesTags: ["readReviewById"],
    }),

    deleteReview: builder.mutation({
      query: (id) => {
        return {
          url: `/review/${id}`,
          method: "DELETE",
        };
      },
      //3)invalidating tag
      invalidatesTags: ["readReview"],
    }),

    createReview: builder.mutation({
      query: (body) => {
        return {
          url: "/review",
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["readReview"],
    }),

    updateReview: builder.mutation({
      query: (info) => {
        return {
          url: `${bUrl}/review/${info.id}`,
          method: "PATCH",
          body: info.body,
        };
      },
      invalidatesTags: ["readReview", "readReviewById"],
    }),
  }),
});

export const {
  useReadReviewQuery,
  useDeleteReviewMutation,
  useReadReviewByIdQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
} = reviewApi;
