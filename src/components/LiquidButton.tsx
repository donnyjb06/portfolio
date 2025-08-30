import type { IconType } from "react-icons";
import { LiquidButton as AnimatedButton } from "./animate-ui/buttons/liquid";
import { cn } from "../lib/utils";

interface LiquidButtonProps {
	Icon: IconType;
	text: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
	link?: string;
	className?: string;
}
const LiquidButton = ({
	Icon,
	className,
	text,
	onClick,
	link,
}: LiquidButtonProps) => {
	return (
		<a href={link} className="group grow flex-1 sm:max-w-[50%]" target="_blank">
			<AnimatedButton onClick={onClick} className="w-full">
				<p className="flex gap-2 text-foreground items-center">
					<Icon
						className={cn(
							"text-primary group-hover:text-foreground delay-300",
							className
						)}
						style={{ width: "20px", height: "20px" }}
					/>
					{text}
				</p>
			</AnimatedButton>
		</a>
	);
};

export default LiquidButton;
