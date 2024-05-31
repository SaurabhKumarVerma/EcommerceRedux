import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../service/api/api";
import { RootState } from "../store";
import ECommerceAsyncStore from "../../service/asyncStorage/userStorage";
import {
  AsyncThunkConfig,
  GetThunkAPI,
} from "@reduxjs/toolkit/dist/createAsyncThunk";
type userData = {
  token: string;
};

export type TLoginCredential = {
  username: string;
  password: string;
};
export interface IUserState extends userData {
  userData: userData;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
  userName: string;
  password: string;
  isTokenAvailable: Promise<string | void> | string | null;
  isLoggedInTrue: boolean;
}

const initialState: IUserState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
  userName: "",
  password: "",
  isTokenAvailable: null,
  token: null,
  isLoggedInTrue: false,
};

export const login = createAsyncThunk(
  "login",
  async (param: TLoginCredential, thunkApi: GetThunkAPI<AsyncThunkConfig>) => {
    try {
      const response = await apiService.post<IUserState>("/auth/login", param);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userName: (state, action) => {
      state.userName = action.payload;
    },
    password: (state, action) => {
      state.password = action.payload;
    },
    getUserToken: (state, action) => {
      state.isTokenAvailable = action.payload;
    },
    logout: (state) => {
      ECommerceAsyncStore.removeUserToken();

      state.isTokenAvailable = null;
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state: IUserState) => {
      (state.isLoading = true), (state.isError = false);
      state.isTokenAvailable = null;
    });
    builder.addCase(
      login.fulfilled,
      (state: IUserState, action: PayloadAction<IUserState>) => {
        state.isLoading = false;
        state.isSuccess = true;
        ECommerceAsyncStore.saveUserToken(action.payload.token);
        state.isTokenAvailable = action.payload.token;
        // navigationRef.navigate("Home");
      }
    );
    builder.addCase(
      login.rejected,
      (state: IUserState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.isTokenAvailable = null;
        state.errorMessage = action.payload as string;
      }
    );
  },
});

export const { logout, userName, password, getUserToken } = AuthSlice.actions;
export const useSelector = (state: RootState) => state.auth;
export default AuthSlice.reducer;
