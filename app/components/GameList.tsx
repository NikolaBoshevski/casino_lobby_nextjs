"use client"

import { Game, setGames } from "@/lib/features/gamesSlice"
import { gamesArray } from "@/lib/games"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import Favorite from "./Favorite"

export default function GameList() {
    // global variables
    const dispatch = useAppDispatch()
    const games = useAppSelector(state => state.games.items)
    const initialized = useRef(false)
    const searchParams = useSearchParams();
    const search = searchParams.get("search")?.toLowerCase() ?? ""
    const categoriesParams = searchParams.get("category")?.toLowerCase() ?? ""
    const favoriteActiveParams = searchParams.get("filterByFavorites")?.toLowerCase() ?? ""
    console.log("Favorite params", favoriteActiveParams)

    // hooks
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [favoriteIds, setFavoriteIds] = useState<string[]>([])
    useEffect(() => {
        const stored = localStorage.getItem("favorites")
        if (stored) {
            setFavoriteIds(JSON.parse(stored))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favoriteIds))
    }, [favoriteIds])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isLoaded)
                setIsLoaded(true)
        }, 1000);
        return () => clearInterval(timer)
    }, [])

    // rest of logic
    if (search || categoriesParams == "") {
        console.warn("Search input or categoriesParams is empty")
    }
    const filteredGames: Game[] = games.filter(({ name, provider, category, id }) => {
        if ((name.toLowerCase().includes(search) || provider.toLowerCase().includes(search))
            && (category.toLowerCase().toString().includes(categoriesParams))
            && (!favoriteActiveParams || favoriteIds.includes(`${id}`))) {
            return true
        }
        return false
    })
    if (!initialized.current) {
        dispatch(setGames(gamesArray))
        initialized.current = true
    }



    function toggleFavorite(id: string) {
        setFavoriteIds(prev => {
            if (prev.includes(id)) {
                return prev.filter(favId => favId !== id)
            }
            return [...prev, id]
        })
    }
    if (games.length == 0) {
        return <h2 className="text-white text-4xl">No games available</h2>
    }
    if (filteredGames.length == 0) {
        return <h2 className="text-white text-4xl">No games match your criteria</h2>
    }
    if (!isLoaded) {
        return <h2 className="text-white text-4xl">Loading Games...</h2>
    }
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-10 place-items-center">
            {filteredGames.length > 0 &&
                filteredGames.map(({ id, name, provider, category, image }) => {
                    return (<div key={id} data-category={category} className="group flex flex-col items-center gap-3 rounded-xl p-4 max-w-fit transition-transform hover:scale-[1.03] duration-300 ">
                        <div className="image-container relative cursor-pointer">
                            <Image src={image} alt={name} width={300} height={150} className="rounded-lg object-cover" />
                            <Favorite filled={favoriteIds.includes(id)} onToggle={() => { toggleFavorite(id) }} />
                        </div>
                        <div className="flex justify-between w-full items-center">
                            <div>
                                <h2 className="w-full rounded-md  text-sm font-semibold text-white">{name}</h2>
                                <h3 className="text-xs text-slate-300 mr-auto w-fit">{provider}</h3>
                            </div>
                            <button className="w-fit rounded-md bg-[#5169D4] py-1 text-sm font-semibold text-white border-transparent transition hover:border-white px-8 border-2 uppercase">Play</button>
                        </div>
                    </div>
                    )
                })}
        </div>
    )
}