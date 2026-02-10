import type { Metadata } from "next";
import GameList from "./components/GameList";
import GameSearch from './components/GameSearch';
import GameCategoryFilter from './components/GameCategoryFilter';
import GameFavoriteFilter from "./components/GameFavoriteFilter";
import { Suspense } from "react";
import ThemeToggle from "./components/ThemeToggle";
export default function IndexPage() {
  return (
    <div className="text-center uppercase font-bold text-slate-900 dark:text-white relative">
      <ThemeToggle></ThemeToggle>
      <h1 className="my-4 text-2xl md:text-4xl tracking-wide">Welcome to X Casino</h1>
      <h2 className="mb-8 text-lg md:text-2xl font-semibold opacity-80">Please Choose A Game </h2>
      <div className="max-w-[1420px] mx-auto">
        <div className="flex gap-x-10 justify-center py-8 px-4 flex-wrap xl:px-0 items-center">
          <Suspense fallback={null}>
            <GameSearch />
          </Suspense>
          <Suspense fallback={null}>
            <GameFavoriteFilter />
          </Suspense>
          <Suspense fallback={null}>
            <GameCategoryFilter />
          </Suspense>
        </div>
        <Suspense fallback={null}>
          <GameList />
        </Suspense>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Casino Game Lobby",
};
