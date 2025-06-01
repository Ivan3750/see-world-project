import { createSlice } from "@reduxjs/toolkit";
import Vila from "../assets/Vila Gale Lagos Hotel.jpg";
import Sierra from "../assets/Sierra de Meira.jpg";
import Petit from "../assets/Petit Hotel.jpg";
import Molitor from "../assets/Molitor Hotel.jpg";
import Le from "../assets/Le Galion Hotel.jpg";
import KViHotel from "../assets/KViHotel.jpg";
import Horison from "../assets/Horison Blu.jpg";
import Gran from "../assets/Gran Hotel.jpg";
import Cala from "../assets/Cala Moresca.jpg";

const initialState = {
    list: []
}


const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
       makeFavorite(state, action){
        state.list= [...state.list, action.payload]
        console.log(state.list)

       }
    }

})


export const {makeFavorite} = favoritesSlice.actions

export const favoritesReducer = favoritesSlice.reducer;
