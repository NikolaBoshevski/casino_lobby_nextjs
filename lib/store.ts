import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from "./features/gamesSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      games: gamesReducer
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']