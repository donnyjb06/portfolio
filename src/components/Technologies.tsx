import { MotionEffect } from "./animate-ui/effects/motion-effect";
import { FaBomb } from "react-icons/fa";
import { InfiniteSlider } from "./InfiniteSlider";
import { TECH_ICONS } from "../lib/constants";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ToolTip";
import { getMotionProps } from "../lib/utils";
import type { CellProps } from "../types/ui";

const Technologies = ({delay}: CellProps) => {
	return (
		<MotionEffect className="grid-cell grid-cell--technologies overflow-x-hidden"
     {...getMotionProps(delay)}>

			<div className="flex flex-col items-center gap-2 justify-center h-full">
				<div className="flex gap-2 items-center mb-auto">
          <FaBomb className="text-primary"/>
					<h2 className="subtitle">Tech Arsenal</h2>
				</div>
        <InfiniteSlider className="w-full z-10 relative mb-auto" speed={30} gap={20} speedOnHover={1} reverse >
          {TECH_ICONS.map(tech => (
            <Tooltip key={tech.technology}>
              <TooltipTrigger className="relative z-20" asChild>
                <tech.icon className="text-3xl text-muted-foreground hover:text-primary hover:scale-110 duration-300 "/>
              </TooltipTrigger>
              <TooltipContent className="glass-morphism text-foreground">{ tech.technology }</TooltipContent>
            </Tooltip>
          ))}
        </InfiniteSlider>

			</div>
		</MotionEffect>
	);
};

export default Technologies;
 