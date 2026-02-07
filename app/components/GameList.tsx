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
       <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-10 place-items-center">
        {games.map(({id,image, name,provider, category})=>(
            <div key={id} data-category={category} className="group flex flex-col items-center gap-3 rounded-xl p-4 max-w-fit transition-transform hover:scale-[1.03] duration-300 ">
               <Image src={image} alt={name} width={270} height={150} className="rounded-lg object-cover"/>
               <div className="flex justify-between w-full items-center">
                <div>
                    <h2 className="w-full rounded-md  text-md font-semibold text-white">{name}</h2>
                    <h3 className="text-sm text-slate-300 mr-auto w-fit">{provider}</h3>
                </div>
                <button className="w-fit rounded-md bg-[#5169D4] py-1 text-sm font-semibold text-white border-transparent transition hover:border-white focus:outline-none focus:ring-2 px-8 focus:ring-offset-2 border-2 uppercase">Play</button>
               </div>
            </div>
        ))}
       </div>
    )
}