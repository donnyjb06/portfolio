import { EXPERIENCES } from "../lib/constants";
import { getMotionProps } from "../lib/utils";
import type { CellProps } from "../types/ui";
import { MotionEffect } from "./animate-ui/effects/motion-effect";
import { MdWork } from "react-icons/md";
import Experience from "./Experience";
import { ScrollProgress } from "./animate-ui/effects/scroll-progress";
import { useRef } from "react";
import ScrollHint from "./ScrollHint";

const Experiences = ({ delay }: CellProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	return (
		<MotionEffect
			ref={containerRef}
			className="grid-cell grid-cell--experiences  grid-cell--scrollable"
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
			<div className="grid-cell-container">
				<div className="grid-cell-heading">
					<MdWork className="text-primary" />
					<h2 className="subtitle">Work Experience</h2>
				</div>
				<ul className="grid-list">
					{EXPERIENCES.map((experience, i) => (
						<Experience experience={experience} key={i} />
					))}
				</ul>
			</div>
			<ScrollHint containerRef={containerRef} />
		</MotionEffect>
	);
};

export default Experiences;
