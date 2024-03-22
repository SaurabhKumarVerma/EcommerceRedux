import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILoadingState, IProduct } from "../../types/types";
import apiService from "../../service/api/api";
import { RootState } from "../store";

interface IEcomProduct extends ILoadingState {
  productsList: IProduct[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  errorMessage?: "";
}

const initialState: IEcomProduct = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  productsList: [],
};

export const product = createAsyncThunk("product", async () => {
  try {
    const response = await apiService.get<IProduct>("/products");
    return response;
  } catch (error) {}
});

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(product.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      product.fulfilled,
      (state, action: PayloadAction<IProduct>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productsList = action.payload;
      }
    );
    builder.addCase(product.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    });
  },
});
const useSelector = (state: RootState) => state.product;
export default ProductSlice.reducer;
