import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from "./features/gamesSlice"
import { gamesArray } from './games'

const preloadedState = {
  games: {
    items: gamesArray,
  },
}

export const makeStore = () => {
  return configureStore({
    reducer: {
      games: gamesReducer
    },
    preloadedState
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']