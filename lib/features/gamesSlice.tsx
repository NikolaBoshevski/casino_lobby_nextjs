import { createSlice, PayloadAction } from "@reduxjs/toolkit"
export interface Game {
id: string;
name: string;
provider: string;
image: string;
category: 'slots' | 'table' | 'live';
}

interface GameState {
    items: Game[];
}

const initialState: GameState = {
  items: [],
}

 const gameSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
        setGames(state, action: PayloadAction<Game[]>){
            state.items = action.payload
        }
    }
})

export const {setGames} = gameSlice.actions
export default gameSlice.reducer