"use client"

import { setGames } from "@/lib/features/gamesSlice"
import { gamesArray } from "@/lib/games"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import Image from "next/image"
import { useRef } from "react"

export default function GameList() {

const dispatch = useAppDispatch()
const games = useAppSelector(state => state.games.items) 
const initialized = useRef(false)


if(!initialized.current){
    dispatch(setGames(gamesArray))
    initialized.current = true
}   
    return(
       <div>
        {games.map(({id,image, name,provider, category})=>(
            <div key={id} className="flex">
               <Image src={image} alt={name} width={100} height={100}/>
                <h2>{name}</h2>
                <h3>{provider}</h3>
                <p>Category: {category}</p>
                <button>Play</button>
            </div>
        ))}
       </div>
    )
}