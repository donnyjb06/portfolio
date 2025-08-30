import {
	useState,
	useEffect,
} from "react";
import type { Props } from "../../types/ui";
import { ModalContext } from "./Modal.context";

const ModalProvider = ({ children }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		if (!isOpen) return;

		const handleClickClose = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			if (target.classList.contains("modal-overlay")) {
				setIsOpen(false)
			}
		};

		const handleEscapeClose = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
        setIsOpen(false);
			}
		};

    document.addEventListener("click", handleClickClose)
    document.addEventListener("keydown", handleEscapeClose)

		return () => {
      document.removeEventListener("click", handleClickClose);
      document.removeEventListener("keydown", handleEscapeClose);
    };
	}, [isOpen]);

	return (
		<ModalContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
