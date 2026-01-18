import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllAdverts } from "../api/getAllAdverts"

export const getAllAdvertThunk = createAsyncThunk("advert/getAll", () => getAllAdverts())

const initialState = {
  list: [],
  isLoading: "",
  err: "",
}
const advertSlice = createSlice({
  name: "advert",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAdvertThunk.fulfilled, (state, action) => {
      console.log(action.payload)
      state.list.push(action.payload)  /* state.list = action.payload */
    })
  },
})

export const advertReducer = advertSlice.reducer
