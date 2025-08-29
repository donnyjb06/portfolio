import { EXPERIENCES } from "../lib/constants";
import { getMotionProps } from "../lib/utils";
import type { CellProps } from "../types/ui";
import { MotionEffect } from "./animate-ui/effects/motion-effect";
import { MdWork } from "react-icons/md";
import Experience from "./Experience";
import { ScrollProgress } from "./animate-ui/effects/scroll-progress";
import { useRef } from "react";

const Experiences = ({ delay }: CellProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
	return (
		<MotionEffect
      ref={containerRef}
			className="grid-cell grid-cell--experiences max-h-[300px] grid-cell-scrollable"
			{...getMotionProps(delay)}
		>
			<ScrollProgress
				className="sticky top-0 h-0.5 bg-[linear-gradient(to_right,rgba(0,0,0,0),#111111_75%,#111111_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0),#ffffff_75%,#ffffff_100%)]"
				springOptions={{
					stiffness: 280,
					damping: 18,
					mass: 0.3,
				}}
        containerRef={containerRef}
			/>
			<div className="flex flex-col items-center gap-4 p-4">
				<div className="flex items-center gap-2">
					<MdWork className="text-primary" />
					<h2 className="subtitle">Work Experience</h2>
				</div>
				<ul className="flex flex-col gap-4">
					{EXPERIENCES.map((experience, i) => (
						<Experience experience={experience} key={i} />
					))}
				</ul>
			</div>
		</MotionEffect>
	);
};

export default Experiences;
