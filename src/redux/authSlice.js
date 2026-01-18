
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLogged: false,
  user: {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    birthDate: null,
    password: null,
  }
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp(state, action) {
      state.isLogged = true
      state.user = action.payload
    },
    logIn(state, action) {
      /* no pass check for now */
      state.isLogged = true
      state.user = action.payload
    },
    logOut(state, action) {
      state = initialState // i mean it works. 😁
    },
  }
})

/* export const {logIn} = favoritesSlice.actions
 */export const authReducer = authSlice.reducer