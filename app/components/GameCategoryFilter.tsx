"use client"
import { useAppSelector } from "@/lib/hooks"
import { useEffect, useRef, useState } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"

export default function GameCategoryFilter() {
    const games = useAppSelector(state => state.games.items)
    const categories = games.map(game => game.category)
    const gamesSet = new Set(categories)
    const uniqueCategories = Array.from(gamesSet)
    const searchParams = useSearchParams()
    const path = usePathname()
    const router = useRouter()

    const initialCategory = searchParams.get("category") ?? ""
    const [category, setCategory] = useState<string>(initialCategory);

    useEffect(() => {
            const params: URLSearchParams = new URLSearchParams(searchParams.toString());
            if (category) {
                params.set("category", category)
            }
            else {
                params.delete("category");
            }
            router.push(`${path}?${params.toString()}`)
    }, [path,router, category])


    return (
        <div className="flex gap-x-5 flex-wrap gap-y-5 md:gap-y-0 mt-3 md:mt-0 justify-center xl:gap-x-10">{
            uniqueCategories.map(category => {
                return (
                    <button key={category} onClick={()=> setCategory(category)} className={`${initialCategory==category ? "border-white" : "border-transparent" } min-w-max xl:min-w-fit rounded-md bg-[#5169D4] py-1 text-sm font-semibold text-white transition hover:border-white border-2 uppercase px-8`} id={category}>{category}</button>
                )
            })
        }
            <button onClick={() => setCategory("")} className="min-w-max xl:min-w-fit rounded-md bg-[#5169D4] py-1 text-sm font-semibold text-white border-transparent transition hover:border-white px-8 border-2 uppercase" id="clearCategories">Clear Categories</button>
        </div>
    )
}