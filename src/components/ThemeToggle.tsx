import { useTheme } from "../hooks/useTheme";
import { Button } from "./Button";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
 const {toggleTheme} = useTheme();
	return (
		<Button variant="outline" size="icon" onClick={toggleTheme}>
			<Sun className="h-[1rem] w-[1rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
			<Moon className="absolute h-[1rem] w-[1rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
		</Button>
	);
};

export default ThemeToggle;
