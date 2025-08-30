import type { Experience as ExperienceType } from "../types/cells";

interface ExperienceProps {
	experience: ExperienceType;
}

const Experience = ({ experience }: ExperienceProps) => {
	const startDate = new Intl.DateTimeFormat("en-US", {
		month: "short",
		year: "numeric",
	}).format(experience.startDate);

	const endDate =
		typeof experience.endDate === "string"
			? experience.endDate
			: new Intl.DateTimeFormat("en-US", {
					month: "short",
					year: "numeric",
				}).format(experience.endDate);

	return (
		<li className="cell-list-item">
			<div className="flex flex-col">
				<h3 className="font-bold body-text text-primary">
					{experience.title},{" "}
					<span className="body-text text-foreground">
						{experience.company}{`, ${experience.location}`}
					</span>
				</h3>
				<p className="font-extralight body-text">
					{startDate} - {endDate}
				</p>
			</div>
			<ul className="flex flex-col gap-1">
				{experience.responsibilities.map((text, i) => (
					<li key={i} className="list-disc list-inside body-text">
						{text}
					</li>
				))}
			</ul>
		</li>
	);
};

export default Experience;
