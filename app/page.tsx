import type { Metadata } from "next";
import GameList from "./components/GameList";


export default function IndexPage() {
  return <GameList/>
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
