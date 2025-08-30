import { FaGithub } from "react-icons/fa";
import type { Project as ProjectType } from "../types/cells";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ToolTip";
import { IoEyeSharp } from "react-icons/io5";

interface ProjectProps {
	project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
	return (
		<li className="cell-list-item self-stretch">
			<div className="flex gap-4 justify-between items-start lg:items-center">
				<h3 className="font-bold body-text text-primary">{project.name}</h3>
				<div className="flex gap-2">
					<Tooltip>
						<TooltipTrigger>
							<a href={project.githubLink} target="_blank">
								<FaGithub className="text-muted-foreground w-5 h-5 hover:scale-110 duration-300 hover:text-primary" />
							</a>
						</TooltipTrigger>
						<TooltipContent>View Repo</TooltipContent>
					</Tooltip>
					{project.link && (
						<Tooltip>
							<TooltipTrigger>
								<a href={project.link} target="_blank">
									<IoEyeSharp className="text-muted-foreground w-5 h-5 hover:scale-110 duration-300 hover:text-primary" />
								</a>
							</TooltipTrigger>
							<TooltipContent>Live Demo</TooltipContent>
						</Tooltip>
					)}
				</div>
			</div>

				<div className="inline-flex gap-2 flex-wrap">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="p-1 body-text rounded-sm glass-morphism text-foreground hover:animate-pulse hover:duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

			<p className="body-text font-light">{project.description}</p>
			<div className="flex flex-col">
				<h4 className="body-text font-bold">Achievements:</h4>
				<ul className="flex flex-col gap-1">
					{project.achievements.map((achievement, i) => (
						<li className="list-disc font-light list-inside body-text" key={i}>{achievement}</li>
					))}
				</ul>
			</div>
		</li>
	);
};

export default Project;
