"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("theme") === "dark"
    setIsDark(stored)
    document.documentElement.classList.toggle("dark", stored)
    setMounted(true)
  }, [])

  if (!mounted) return null

  function toggleTheme() {
    setIsDark(prev => {
      const next = !prev
      localStorage.setItem("theme", next ? "dark" : "light")
      document.documentElement.classList.toggle("dark", next)
      return next
    })
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md block ml-auto mr-2 mt-2 xl:absolute right-10 top-5 px-4 py-2 text-sm font-semibold bg-slate-200 dark:bg-slate-700 transition-colors"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  )
}
