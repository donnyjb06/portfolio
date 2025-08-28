import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const getInitialTheme = () => {
	const theme: string | null = localStorage.getItem("theme");

	if (!theme || (theme !== "dark" && theme !== "light")) return "dark";

  return theme
};

export { cn, getInitialTheme };
