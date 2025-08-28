interface Props {
	children: React.ReactNode;
}

type Theme = "light" | "dark";

interface ThemeContext {
	theme: Theme | undefined;
	toggleTheme: () => void;
}

export type { Props, ThemeContext, Theme };