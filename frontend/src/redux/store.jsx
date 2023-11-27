// Cette page configure et crée le store Redux pour gérer l'état global de l'application.

import allReducers from "./reducers";
import { configureStore } from '@reduxjs/toolkit';
// Crée le store Redux en utilisant le réducteur racine 'allReducers'

  const store = configureStore({
    reducer: allReducers,
    devTools: process.env.NODE_ENV !== 'production',
  });


export default store;