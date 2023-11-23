"use client"

import React, { ReactNode, useEffect, useState } from "react"
import { createContext } from "react"

type ThemeContextProps = {
  children: ReactNode
}

type ThemeContextType = {
  theme: "light" | "dark"
  toggleTheme: () => void
}

const getFromLocalStorage = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light"

  const theme = localStorage.getItem("theme")
  return theme === "light" || theme === "dark" ? theme : "light"
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: (): void => {}
})

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return getFromLocalStorage()
  })

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
