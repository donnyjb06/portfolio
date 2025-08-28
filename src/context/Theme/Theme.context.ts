import { createContext } from "react";
import type { ThemeContext as ThemeContextType } from "../../types/ui";

const ThemeContext = createContext<ThemeContextType | null>(null);

export { ThemeContext };
