'use client'

import { createContext, ReactNode, useEffect, useState } from "react";
 
type ThemeType = 'light' | 'dark'

type ThemeContextType ={
    theme: ThemeType,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({children} : {children: ReactNode}) {


    function toggleTheme() {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    const [theme, setTheme] = useState<ThemeType>('dark')

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
            
        }}>

            {children}

        </ThemeContext.Provider>
    )
}