import type { IconType } from "react-icons";
import { LiquidButton as AnimatedButton } from "./animate-ui/buttons/liquid";

interface LiquidButtonProps {
	Icon: IconType;
	text: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	link?: string;
}
const LiquidButton = ({ Icon, text, onClick, link }: LiquidButtonProps) => {
	return (
		<a href={link} className="group grow" target="_blank">
			<AnimatedButton onClick={onClick} className="w-full">
				<p className="flex gap-2 text-foreground items-center">
					<Icon
						className="text-primary group-hover:text-foreground delay-300"
						style={{ width: "20px", height: "20px" }}
					/>
					{text}
				</p>
			</AnimatedButton>
		</a>
	);
};

export default LiquidButton;
