import { createContext, useContext, useEffect } from "react"

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProviderContext = createContext({ theme: "dark" })

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "system")

    root.classList.add('dark')

  }, [])

  return (
    <ThemeProviderContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
