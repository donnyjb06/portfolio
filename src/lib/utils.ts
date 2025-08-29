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

const getMotionProps = (delay?: number) => {
	return {

			fade: true,
			blur: "10px",
			inView: true,
      delay: delay || 0,
			transition: { duration: 1 }
	}
}

export { cn, getInitialTheme, getMotionProps };
