import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthSlices from "./slices/AuthSlices";
import { GetDefaultEnhancers } from "@reduxjs/toolkit/dist/getDefaultEnhancers";
import SignupSlice from "./slices/SignupSlice";
import ProductSlice from "./slices/ProductSlice";
import CategorySlice from "./slices/Category";
import OnboardingSlice from "./slices/OnboardingSlice";
import NetworkSlice from "./slices/NetworkSlice";
import { networkMiddleWare } from "./slices/NetworkMiddleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

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
  onboardingSlice: OnboardingSlice,
  network: NetworkSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: hardSet,
  
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  enhancers: createEnhancers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      networkMiddleWare(),
      
    ),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
