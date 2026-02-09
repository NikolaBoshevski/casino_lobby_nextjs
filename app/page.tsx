import type { Metadata } from "next";
import GameList from "./components/GameList";
import GameSearch from './components/GameSearch';
import GameCategoryFilter from './components/GameCategoryFilter';
import GameFavoriteFilter from "./components/GameFavoriteFilter";


export default function IndexPage() {
  return (
    <div className="text-white text-center uppercase font-bold">
      <h1 className=" my-4 text-2xl md:text-4xl">Welcome to X Casino</h1>
      <h2 className=" mb-8 text-xl md:text-2xl">Please Choose A Game </h2>
      <div className="max-w-[1420px] mx-auto">
        <div className="flex gap-x-10 justify-center xl:justify-evenly py-8 px-4 flex-wrap xl:px-0 items-center">
          <GameSearch />
          <GameFavoriteFilter />
          <GameCategoryFilter />
        </div>
        <GameList />
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "Casino Game Lobby",
};
