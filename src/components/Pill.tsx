import { cn } from "../lib/utils";
import React from "react";

interface PillProps {
	icon: React.ReactNode;
	text: string;
	className?: string;
}
const Pill = ({ icon, text, className }: PillProps) => {
	return (
		<div className={cn(" glass-morphism flex justify-start items-center gap-3 py-[4px] px-2 rounded-2xl", className)}>
			{icon}
			<p className="text-foreground-muted whitespace-nowrap text-sm">{text}</p>
		</div>
	);
};

export default Pill;
