import Pill from "./Pill";
import { MotionEffect } from "./animate-ui/effects/motion-effect";
import { TypingText } from "./animate-ui/text/typing";
import PillBox from "./PillBox";
import { SOCIALS, SUMMARY_PILLS } from "../lib/constants";
import LiquidButton from "./LiquidButton";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { getMotionProps } from "../lib/utils";
import type { CellProps } from "../types/ui";
import AttentionHover from "./AttentionHover";

const Summary = ({delay}: CellProps) => {
	return (
		<MotionEffect
			className="grid-cell--summary grid-cell"
		{...getMotionProps(delay)}
		>
			<div className="flex flex-col justify-between h-full gap-6">
				<div className="flex gap-4">
				<AttentionHover />
					<div className="flex flex-col justify-between grow">
						<div className="flex gap-2 justify-between flex-wrap-reverse">
							<Pill
								text="Available To Work"
								icon={
									<span className="w-[7px] h-[7px] bg-success rounded-[50%] animate-pulse-glow "></span>
								}
							/>
							<ThemeToggle />
						</div>
						<div className="flex flex-col gap-1 justify-between">
							<h1 className="header">Donovan Jabbar</h1>
							<TypingText
								text="Full-Stack Web Developer"
								className="body-text text-primary font-medium whitespace-nowrap"
							/>
						</div>
					</div>
				</div>
				<PillBox>
					{SUMMARY_PILLS.map((pill, i) => (
						<Pill icon={<pill.icon className="text-primary"/>} text={pill.text} key={i} />
					))}
				</PillBox>
				<div className="flex gap-2 flex-col sm:flex-row">
				<LiquidButton text="Instagram" link={SOCIALS.instagram} Icon={PiInstagramLogoFill}/>
				<LiquidButton text="LinkedIn" link={SOCIALS.linkedIn} Icon={FaLinkedin}/>
				</div>
			</div>
		</MotionEffect>
	);
};

export default Summary;
