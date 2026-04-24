import type { ReactNode } from "react"

import { TasksProvider } from "../context/TasksContext"

import "@/src/app/globals.css"
import { ThemeProvider } from "../context/ThemeContext"

type Props = {
  children: ReactNode
}

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard feito em Next.js'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function Layout({children}: Props) {

  return ( 
    <html lang="pt-br">
      <body>
          <ThemeProvider>
            <TasksProvider>
              {children}
            </TasksProvider>
          </ThemeProvider>
      </body>
    </html>
  )
}
