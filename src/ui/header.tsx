import { useTheme } from "hooks/useTheme";
import { MoonIcon, SunIcon } from "lucide-react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between text-zinc-800 dark:text-zinc-200">
      <h1 className="text-2xl font-bold">devfinder</h1>
      <div className="flex cursor-pointer items-center gap-4">
        <button onClick={toggleTheme} className="cursor-pointer font-medium">
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}
