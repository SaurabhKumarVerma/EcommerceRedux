import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthSlices from "./slices/AuthSlices";
import { GetDefaultEnhancers } from "@reduxjs/toolkit/dist/getDefaultEnhancers";
import SignupSlice from "./slices/SignupSlice";
import ProductSlice from "./slices/ProductSlice";
import CategorySlice from "./slices/Category";
import OnboardingSlice from "./slices/OnboardingSlice";

const createEnhancers = (getDefaultEnhancers: GetDefaultEnhancers<any>) => {
  if (__DEV__) {
    const reactotron = require("../../ReactotronConfig").default;
    return getDefaultEnhancers().concat(reactotron.createEnhancer());
  } else {
    return getDefaultEnhancers();
  }
};

const rootReducer = combineReducers({
  auth: AuthSlices,
  signup: SignupSlice,
  product: ProductSlice,
  category: CategorySlice,
  onboardingSlice: OnboardingSlice
});

export const store = configureStore({
  reducer: rootReducer,
  enhancers: createEnhancers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
