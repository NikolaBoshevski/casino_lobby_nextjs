"use client"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function GameSearch() {

    const router = useRouter();
    const searchParams = useSearchParams()
    const path = usePathname()

    const initialSearch = searchParams.get("search") ?? ""
    const [searchInput, setSearchInput] = useState<string>(initialSearch);

    useEffect(() => {
        const timer = setTimeout(() => {
            const params: URLSearchParams = new URLSearchParams(searchParams.toString());
            if (searchInput) {
                params.set("search", searchInput)
            }
            else {
                params.delete("search");
            }
            router.push(`${path}?${params.toString()}`)
        }, 300);
        return () => clearTimeout(timer);

    }, [searchInput, path, router])

    return (
        <div className="relative flex flex-1 flex-shrink-0 justify-end px-8 md:px-14 py-8 flex-wrap ml-auto">
            <input
                className="peer block w-full md:w-80 h-10 rounded-md border text-black focus-within:outline-none border-gray-200 p-[10px] text-sm outline-2 placeholder:text-gray-500 shadow-md dark:bg-dark dark:placeholder:text-darktext dark:text-darktext"
                placeholder="Search by name or provider"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>
    )
}
