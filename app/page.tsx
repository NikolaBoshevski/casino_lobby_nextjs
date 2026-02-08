import type { Metadata } from "next";
import GameList from "./components/GameList";
import GameSearch from './components/GameSearch';


export default function IndexPage() {
  return (
    <div className="text-white text-center uppercase font-bold">
      <h1 className=" my-4 text-2xl md:text-4xl">Welcome to X Casino</h1>
      <h2 className=" mb-8 text-xl md:text-2xl">Please Choose A Game </h2>
      <GameSearch/>
      <GameList/>
    </div>
)
}

export const metadata: Metadata = {
  title: "Casino Game Lobby",
};
