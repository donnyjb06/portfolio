import { PROJECTS } from "../lib/constants";
import { MotionEffect } from "./animate-ui/effects/motion-effect";
import type { CellProps } from "../types/ui";
import { getMotionProps } from "../lib/utils";
import { ScrollProgress } from "./animate-ui/effects/scroll-progress";
import { useRef } from "react";
import { FaFolderOpen } from "react-icons/fa";
import Project from "./Project";
import ScrollHint from "./ScrollHint";

const Projects = ({ delay }: CellProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	return (
		<MotionEffect
			ref={containerRef}
			className="grid-cell grid-cell--projects grid-cell--scrollable"
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
					<FaFolderOpen className="text-primary" />
					<h2 className="subtitle">Projects</h2>
				</div>
				<ul className="grid-list">
					{PROJECTS.map((project, i) => (
						<Project project={project} key={i} />
					))}
				</ul>
			</div>
			<ScrollHint containerRef={containerRef} />
		</MotionEffect>
	);
};

export default Projects;
