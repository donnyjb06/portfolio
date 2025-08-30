import type { Dispatch, SetStateAction } from "react";

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

interface ModalContext {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export type { Props, ThemeContext, Theme, CellProps, ModalContext };