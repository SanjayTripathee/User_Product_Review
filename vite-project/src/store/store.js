import { configureStore } from "@reduxjs/toolkit";
import { reviewApi } from "../services/reviewService";

export const store = configureStore({
  reducer: {
    [reviewApi.reducerPath]: reviewApi.reducer,
  },
  // to hit api
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([reviewApi.middleware]),
});
