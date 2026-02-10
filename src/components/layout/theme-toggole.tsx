import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/providers/theme.provider"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        // Get actual current theme (considering system preference if theme is "system")
        const currentTheme = theme === "system"
            ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
            : theme;

        // Toggle between light and dark
        setTheme(currentTheme === "dark" ? "light" : "dark");
    };

    // Determine which icon to show based on actual theme (including system preference)
    const isDark = theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : theme === "dark";

    return (
        <Button variant="outline" size="icon" onClick={toggleTheme}>
            <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${isDark ? 'scale-0 rotate-90' : 'scale-100 rotate-0'}`} />
            <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isDark ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'}`} />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
