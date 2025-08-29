interface Props {
	children: React.ReactNode;
}

type Theme = "light" | "dark";

interface ThemeContext {
	theme: Theme | undefined;
	toggleTheme: () => void;
}

interface CellProps {
	delay?: number;
}

export type { Props, ThemeContext, Theme, CellProps };