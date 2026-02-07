"use client"

import { gamesArray } from "@/lib/games"
import Image from "next/image"

export default function GameList() {
    return(
       <div>
        {gamesArray.map(game=>(
            <div key={game.id}>
               <Image src={game.image} alt={game.name} width={100} height={100}/>
                <h2>{game.name}</h2>
                <h3>{game.provider}</h3>
                <p>Category: {game.category}</p>
                <button>Play</button>
            </div>
        ))}
       </div>
    )
}