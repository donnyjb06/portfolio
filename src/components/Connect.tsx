import type { CellProps } from "../types/ui";
import { MotionEffect } from "./animate-ui/effects/motion-effect";
import { getMotionProps } from "../lib/utils";
import { PiShareNetworkFill } from "react-icons/pi";
import LiquidButton from "./LiquidButton";
import { MdSimCardDownload } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { SOCIALS } from "../lib/constants";
import { useState } from "react";

const Connect = ({delay}: CellProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleClick = () => {
    navigator.clipboard.writeText(SOCIALS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

	return (
		<MotionEffect
			className="grid-cell grid-cell--connect"
			{...getMotionProps(delay)}
		>
			<div className="grid-cell-container p-0">
				<div className="flex flex-col items-center gap-2">
					<div className="w-10 h-10 glass-morphism rounded-[50%] flex items-center justify-center">
						<PiShareNetworkFill className="text-primary h-6 w-6" />
					</div>
					<h3 className="subtitle">Let's Work!</h3>
				</div>

				<div className="grow flex gap-2 flex-wrap lg:flex-nowrap">
					<a href="/resume.pdf" download="Donovan_Jabbar_Resume_2025.pdf" className="grow flex-1 sm:max-w-[50%]">
						<LiquidButton text="Resume" Icon={MdSimCardDownload} className="w-full"/>
					</a>
					<LiquidButton text={copied ? "Copied" : "Email Me" } Icon={SiMinutemailer} onClick={handleClick}/>
				</div>
			</div>
		</MotionEffect>
	);
};

export default Connect;
