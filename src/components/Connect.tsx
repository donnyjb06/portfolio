import type { CellProps } from "../types/ui";
import { MotionEffect } from "./animate-ui/effects/motion-effect";
import { getMotionProps } from "../lib/utils";
import { PiShareNetworkFill } from "react-icons/pi";
import LiquidButton from "./LiquidButton";
import { IoIosDocument } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { useModal } from "../hooks/useModal";

const Connect = ({ delay }: CellProps) => {
  const {setIsOpen} = useModal();
	return (
		<MotionEffect
			className="grid-cell grid-cell--connect"
			{...getMotionProps(delay)}
		>
			<div className="grid-cell-container p-0">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 glass-morphism rounded-[50%] flex items-center justify-center">
            <PiShareNetworkFill className="text-primary h-6 w-6"/>
          </div>
          <h3 className="subtitle">Let's Work!</h3>
        </div>

        <div className="grow flex gap-2 flex-wrap">
          <LiquidButton text="View Resume" Icon={IoIosDocument} onClick={() => setIsOpen(true)}/>
          <LiquidButton text="Email Me" Icon={SiMinutemailer}/>
        </div>
      </div>
		</MotionEffect>
	);
};

export default Connect;
