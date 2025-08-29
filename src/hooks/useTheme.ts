import { useContext } from "react";
import { ThemeContext } from "../context/Theme/Theme.context";

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider component");
	}

	return context;
};
