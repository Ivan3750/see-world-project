import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  selectedListing: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.selectedListing = action.payload;
    },

    closeModal(state, action) {
      state.isOpen = false;
      state.selectedListing = null;
    },
    selectListing(state, action){
        state.selectedListing = action.payload
        console.log(state.selectedListing)
    }
  },
});

export const {openModal, closeModal, selectListing} = modalSlice.actions

export const modalReducer = modalSlice.reducer
