//configure le stockage persistant des données d'une application React en utilisant Redux Persist.

import allReducers from "./reducers";
import { configureStore } from '@reduxjs/toolkit';
import {
persistStore,
persistReducer,
FLUSH,
REHYDRATE,
PAUSE,
PERSIST,
PURGE,
REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// Configuration de Redux Persist
const persistConfig = {
  key: 'root',
  storage,// moteur stockage utiliser (localstorage)
};

const persistedReducer = persistReducer(persistConfig, allReducers);

//config store redux 
const store = configureStore({
  reducer: persistedReducer,// Utilise le réducteur
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],// Ignore
      },
    }),
})

const persistor = persistStore(store);

export { store, persistor };
