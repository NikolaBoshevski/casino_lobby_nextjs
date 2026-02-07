import type { ReactNode } from "react";
import "./styles/globals.css";
import { StoreProvider } from "./StoreProvider";
interface Props {
  readonly children: ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
  <html>
    <body className="bg-violet-950 flex justify-center">        
      <StoreProvider>{children}</StoreProvider>      
    </body>
  </html>
  )
}
