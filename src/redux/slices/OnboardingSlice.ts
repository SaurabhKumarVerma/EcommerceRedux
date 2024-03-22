import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IIsVisible {
  isVisible: boolean;
}
const initialState: IIsVisible = {
  isVisible: true,
};

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });

export const asyncLogIn = createAsyncThunk("change", async () => {
  await wait(10 * 1000);
});

export const OnboardingSlice = createSlice({
  name: "onboardingSlice",
  initialState,
  reducers: {
    onStartSplash: (state) => {
      state.isVisible = false;
    },
    onStopSplash: (state) => {
      state.isVisible = false;
    },
  },
});

export const { onStartSplash, onStopSplash } = OnboardingSlice.actions;
export const useSelector = (state: RootState) => state.onboardingSlice;
export default OnboardingSlice.reducer;
