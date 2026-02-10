import type { ReactNode } from "react";
import "./styles/globals.css";
import { StoreProvider } from "./StoreProvider";
interface Props {
  readonly children: ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      try {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") {
          document.documentElement.classList.add("dark")
        }
      } catch {}
    `,
          }}
        />
      </head>
      <body className="bg-slate-100 text-slate-900 dark:bg-[#0E1A2B] dark:text-slate-100 transition-colors duration-300">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  )
}
