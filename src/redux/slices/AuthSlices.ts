import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../service/api/api";
import { IUser } from "../../types/types";
import { RootState } from "../store";
import ECommerceAsyncStore from "../../service/asyncStorage/userStorage";
import { replace } from "../../navigation/RootNavigation";
type userData = {
  token: string;
};

export type TLoginCredential = {
  username: string;
  password: string;
};
export interface IUserState {
  userData: userData;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
  userName: string;
  password: string;
  isTokenAvailable: Promise<string>;
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
};

export const login = createAsyncThunk(
  "login",
  async (param: TLoginCredential, thunkApi) => {
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
    getUserToken: (state) => {
      let token = ECommerceAsyncStore.getAccessToken().then((res) => {
        return JSON.stringify(res);
      });
      state.isTokenAvailable = token;
    },
    logout: (state) => {
      ECommerceAsyncStore.removeUserToken();
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state: IUserState) => {
      (state.isLoading = true), (state.isError = false);
    });
    builder.addCase(
      login.fulfilled,
      (
        state: IUserState,
        action: PayloadAction<IUserState | Promise<string>>
      ) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.isLoading = false;
        state.userData.token = action.payload;
        ECommerceAsyncStore.saveUserToken(state.userData.token);
      }
    );
    builder.addCase(
      login.rejected,
      (state: IUserState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload as string;
      }
    );
  },
});

export const { logout, userName, password, getUserToken } = AuthSlice.actions;
export const useSelector = (state: RootState) => state.auth;
export default AuthSlice.reducer;
