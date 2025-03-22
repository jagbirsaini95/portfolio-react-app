import { useEffect, useState } from "react"
import { ThemeContext } from "./context/ThemeContext"
import AppRouter from "./router"

function App() {
  const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem("darkMode") || "false"))

  const toggleTheme = () => setDarkMode((prev: boolean) => !prev)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <AppRouter />
    </ThemeContext.Provider>

  )
}

export default App
