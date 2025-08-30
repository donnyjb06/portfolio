import { IoEyeSharp } from "react-icons/io5";
import type { Certification as CertType } from "../types/cells";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ToolTip";

interface CertificationProps {
	cert: CertType;
}

const Certification = ({ cert }: CertificationProps) => {
	const dateIssued =
		typeof cert.issueDate === "string"
			? cert.issueDate
			: new Intl.DateTimeFormat("en-US", {
					month: "short",
					year: "numeric",
				}).format(cert.issueDate);

	return (
		<li className="cell-list-item">
			<div className="flex flex-col">
				<div className="flex gap-4 justify-between items-start lg:items-center">
					<h3 className="font-bold body-text text-primary">{cert.name}</h3>
					<Tooltip>
						<TooltipTrigger>
							<a href={cert.link} target="_blank">
								<IoEyeSharp className="text-muted-foreground w-5 h-5 hover:scale-110 duration-300 hover:text-primary" />
							</a>
						</TooltipTrigger>
						<TooltipContent>View Certificate</TooltipContent>
					</Tooltip>
				</div>
				<p className="body-text font-bold">
					Issuer:<span className="font-light">{` ${cert.issuer}`}</span>
				</p>
				<p className="body-text font-bold">
					Date Issued:<span className="font-light">{` ${dateIssued}`}</span>
				</p>
			</div>
		</li>
	);
};

export default Certification;
