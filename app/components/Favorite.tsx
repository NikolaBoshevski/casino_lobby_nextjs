"use client"

import { MouseEventHandler } from "react"

interface FavoritePros {
    filled?: boolean,
    onToggle? : () => void
}

export default function Favorite({ filled = false, onToggle }: FavoritePros) {

    return (
        <button onClick={onToggle} className="outline-none absolute top-3 right-3">
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill={filled==true ? "red" : "none"}
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20.8 4.6c-1.9-1.8-5-1.8-6.9 0L12 6.4l-1.9-1.8c-1.9-1.8-5-1.8-6.9 0-2 1.9-2 5 0 6.9l8.8 8.6 8.8-8.6c2-1.9 2-5 0-6.9z" />
            </svg>
        </button>
    )
}