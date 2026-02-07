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
       <div className="grid grid-cols-6">
        {games.map(({id,image, name,provider, category})=>(
            <div key={id} data-category={category} className="flex flex-col items-center gap-3">
               <Image src={image} alt={name} width={200} height={150} className=""/>
                <h2 className="bg-green-900 text-white px-10 py-5 rounded font-bold">{name}</h2>
                <h3>{provider}</h3>
                <button>Play</button>
            </div>
        ))}
       </div>
    )
}