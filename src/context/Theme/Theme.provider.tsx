import { ThemeContext } from "./Theme.context";
import { useEffect, useRef, useState } from "react";
import type { Props, Theme } from "../../types/ui";
import { getInitialTheme } from "../../lib/utils";

const ThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState<Theme>("dark");
	const isFirstRun = useRef(true);

	useEffect(() => {
		const initialTheme = getInitialTheme();
		setTheme(initialTheme)
	}, [])

	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false;
			return;
		}

		if (theme === "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}

		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
