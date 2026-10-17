import { Moon, Sun } from "lucide-react"
import { useTheme } from "../theme/ThemeProvider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const next = theme === "dark" ? "light" : "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ivory transition-colors hover:border-blue/50 hover:bg-surface-2"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" strokeWidth={1.75} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.75} />
      )}
    </button>
  )
}
