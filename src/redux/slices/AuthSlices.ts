import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../service/api/api";
import { IUser } from "../../types/types";
import { RootState } from "../store";

export interface IUserState {
  userData: undefined | IUser;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
}

const initialState: IUserState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const login = createAsyncThunk("login", async (param, thunkApi) => {
  try {
    const response = await apiService.post<IUserState>("/auth/login", param);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state: IUserState) => {
      (state.isLoading = true), (state.isError = false);
    });
    builder.addCase(
      login.fulfilled,
      (state: IUserState, action: PayloadAction<IUserState | IUser>) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.userData = action.payload as IUser;
      }
    );
    builder.addCase(
      login.rejected,
      (state: IUserState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload as string;
      }
    );
  },
});

export const useSelector = (state: RootState) => state.auth;
export default AuthSlice.reducer;
