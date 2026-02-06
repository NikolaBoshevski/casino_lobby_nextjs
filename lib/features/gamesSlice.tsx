import { createSlice, PayloadAction } from "@reduxjs/toolkit"
interface Game {
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
        setgames(state, action: PayloadAction<Game[]>){
            state.items = action.payload
        }
    }
})