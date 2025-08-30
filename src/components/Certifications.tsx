import type { CellProps } from "../types/ui";
import { MotionEffect } from "./animate-ui/effects/motion-effect";
import {CERTIFICATIONS} from '../lib/constants';
import { getMotionProps } from "../lib/utils";
import { PiCertificateFill } from "react-icons/pi";
import Certification from "./Certification";


const Certifications = ({delay}: CellProps) => {
  return(
    <MotionEffect className="grid-cell grid-cell--scrollable grid-cell--certifications" {...getMotionProps(delay)}>

			<div className="grid-cell-container">
				<div className="grid-cell-heading">
					<PiCertificateFill className="text-primary" />
					<h2 className="subtitle">Certifications</h2>
				</div>
				<ul className="grid-list">
					{CERTIFICATIONS.map((cert, i) => (
						<Certification cert={cert} key={i} />
					))}
				</ul>
			</div>
    </MotionEffect>
  )
}

export default Certifications;