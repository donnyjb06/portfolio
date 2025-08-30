import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Button } from "./Button";

interface ScrollHintProps {
	containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollHint({ containerRef }: ScrollHintProps) {
	const [isScrollable, setIsScrollable] = useState(false);
	const [isScrolledDown, setIsScrolledDown] = useState(false);

	useEffect(() => {
		if (!containerRef) return;
		const el = containerRef.current;
		if (!el) return;

		const checkScrollable = () => {
			setIsScrollable(el.scrollHeight > el.clientHeight);
			setIsScrolledDown(el.scrollTop > 50);
		};

		checkScrollable();
		el.addEventListener("scroll", checkScrollable);
		window.addEventListener("resize", checkScrollable);

		return () => {
			el.removeEventListener("scroll", checkScrollable);
			window.removeEventListener("resize", checkScrollable);
		};
	}, [containerRef]);

	if (!isScrollable) return null;

	return (
		!isScrolledDown && (
			<Button
				size="icon"
				variant="outline"
				className="absolute bottom-4 right-4 z-10 p-2 rounded-full text-foreground transition hover:bg-inherit"
			>
				<FaArrowDown className="w-5 h-5 animate-bounce-fade" />
			</Button>
		)
	);
}
