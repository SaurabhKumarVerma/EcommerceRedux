import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../service/api/api";
import { ILoadingState, ISignUpUser } from "../../types/types";
import { RootState } from "../store";

interface ISignup extends ILoadingState {}

const initialState: ISignup = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const signup = createAsyncThunk(
  "signup",
  async (param: ISignUpUser, thunkApi) => {
    try {
      const response = await apiService.post("/users/", param);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
  },
});

const useSelector = (state: RootState) => state.signup;
export default SignupSlice.reducer;
