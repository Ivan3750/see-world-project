import { createReducer } from "@reduxjs/toolkit";
import { OpenModal, CloseModal } from "./action";

const initialState = {
  isOpen: false,
  selectedListing: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(OpenModal, (state, action) => {
    state.isOpen = true;
    state.selectedListing = action.payload;
  })

    builder.addCase(CloseModal, (state, action) => {
      state.isOpen = false;
      state.selectedListing = null;
    });
});
