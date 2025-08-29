import headshot from "../assets/headshot.jpg";
import glasses from "../assets/glasses.png";
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

const Summary = ({delay}: CellProps) => {
	return (
		<MotionEffect
			className="grid-cell--summary grid-cell"
		{...getMotionProps(delay)}
		>
			<div className="flex flex-col justify-between h-full gap-6">
				<div className="flex gap-4">
					<div className="relative overflow-hidden shrink-0 group">
						<img
							src={headshot}
							className="rounded-lg"
							alt="headshot of Donovan Jabbar"
						/>
						<img
							src={glasses}
							className="absolute -left-10 transition-all ease-out duration-200 group-hover:top-[22px] group-hover:left-7 w-[40px]"
							alt="8-bit glasses"
						/>
					</div>
					<div className="flex flex-col justify-between grow">
						<div className="flex gap-2 justify-between flex-wrap-reverse:">
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
								text="Full-Stack Developer"
								className="body-text text-primary font-medium"
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
