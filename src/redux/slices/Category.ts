import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../service/api/api";
import { ILoadingState } from "../../types/types";
import { RootState } from "../store";

interface ICategory extends ILoadingState {
  categoryList: Array<string>;
}

const initialState: ICategory = {
  categoryList: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
};
const category = createAsyncThunk("category", async (param, thunkApi) => {
  try {
    const result = await apiService.get("/products/categories");
    return result;
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});

const CategorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(category.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(category.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.categoryList = action.payload as ICategory;
    });
    builder.addCase(category.rejected, (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
    });
  },
});

export const useSelector = (state: RootState) => state.CategorySlice;
export default CategorySlice.reducer;