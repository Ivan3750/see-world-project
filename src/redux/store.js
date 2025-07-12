import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modalSlice";
import { filterReducer } from "./filterSlice";
import { favoritesReducer } from "./favoritesSlice";
import { combineReducers } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { advertReducer } from "./advertSlice";
import { authReducer } from "./authSlice";


const rootReducer = combineReducers({
  modal: modalReducer,
  filter: filterReducer,
  favorites: favoritesReducer,
  advert: advertReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
