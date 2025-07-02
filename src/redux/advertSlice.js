import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllAdverts } from "../api/getAllAdverts";

export const getAllAdvertThunk = createAsyncThunk(() => getAllAdverts());


const initialState = {
  list: [],
  isLoading: "",
  err: "",
};
const advertSlice = createSlice({
  name: "advert",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAdvertThunk.fulfilled, (state, action) => {
      console.log(action.payload)
      state.list.push(action.payload);  /* state.list = action.payload */
    });
    builder.addCase(getAllAdvertThunk.rejected, (state, action) => {
      console.log("error")
      
    });
  },
});

export const advertReducer = advertSlice.reducer;
