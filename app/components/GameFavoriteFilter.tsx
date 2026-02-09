"use client"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function GameFavoriteFilter(){
    const searchParams = useSearchParams()
    const path = usePathname()
    const router = useRouter()

    const initialFavoriteStatus = searchParams.get("filterByFavorites") === "true"
    const [favoritesActive, setFavoritesActive] = useState<boolean>(initialFavoriteStatus);

    useEffect(() => {
            const params: URLSearchParams = new URLSearchParams(searchParams.toString());
            if (favoritesActive) {
                params.set("filterByFavorites", favoritesActive.toString())
            }
            else {
                params.delete("filterByFavorites");
            }
            router.push(`${path}?${params.toString()}`)
    }, [path,router, favoritesActive])



    return(
        <button onClick={() => setFavoritesActive(favoritesActive => !favoritesActive)} className={`w-fit rounded-md bg-[#5169D4] py-1 text-sm font-semibold text-white border-transparent transition hover:border-white focus:outline-none  px-8  border-2 uppercase ${initialFavoriteStatus ? "border-white" : "border-transparent"}`} >Show only favorites</button>
    )
}