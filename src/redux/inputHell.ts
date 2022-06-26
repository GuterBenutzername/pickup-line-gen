import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InputHellState {
  crusheeName: string;
  crusheeGender: string;
  crusheeLikes: string;
  crusheeHairColor: string;
  crusheeEyeColor: string;
  crusherName: string;
  crusherGender: string;
  crusherLikes: string;
}

const initialState = {
  crusheeName: "",
  crusheeGender: "",
  crusheeLikes: "",
  crusheeHairColor: "",
  crusheeEyeColor: "",
  crusherName: "",
  crusherGender: "",
  crusherLikes: "",
} as InputHellState;

const inputHellSlice = createSlice({
  name: "inputHell",
  initialState,
  reducers: {
    handleInputHellChange(
      state,
      action: PayloadAction<Partial<InputHellState>>
    ) {
      return { ...state, ...action.payload };
    },
  },
});
export const { handleInputHellChange } = inputHellSlice.actions;
export default inputHellSlice.reducer;
