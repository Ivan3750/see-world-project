import { configureStore } from "@reduxjs/toolkit";
import  {modalReducer}  from "./modalSlice";
import { filterReducer } from "./filterSlice";
import { favoritesReducer } from "./favoritesSlice";

export const store = configureStore({
    reducer:{
    modal: modalReducer,
    filter: filterReducer,
    favorites: favoritesReducer
}}
)