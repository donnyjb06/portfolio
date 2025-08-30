import { useEffect, useRef, useState } from "react";
import headshot from "../assets/headshot.jpg";
import glasses from "../assets/glasses.png";
import { TEASER_MESSAGES } from "../lib/constants";

const AttentionHover = () => {
	const [hasHovered, setHasHovered] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");
	const idxRef = useRef(0);
	const showTimeout = useRef<NodeJS.Timeout | null>(null);
	const hideTimeout = useRef<NodeJS.Timeout | null>(null);
	const hasRun = useRef<boolean>(false)

 useEffect(() => {
    // Skip first render
    if (!hasRun.current) {
      hasRun.current = true;
      return;
    }

    // Only run for large screens and if not hovered
    if (window.innerWidth < 1024 || hasHovered) return;

    const visited = localStorage.getItem("hasVisited") === "true";
    if (visited) return; // Do not run for returning visitors

    // Mark as visited
    localStorage.setItem("hasVisited", "true");

    // Start teaser cycle after 3 seconds
    showTimeout.current = setTimeout(() => {
      const cycle = () => {
        setMessage(TEASER_MESSAGES[idxRef.current]);

        hideTimeout.current = setTimeout(() => {
          setMessage("");

          showTimeout.current = setTimeout(() => {
            idxRef.current = (idxRef.current + 1) % TEASER_MESSAGES.length;
            cycle();
          }, 5000); // 5s delay before next message
        }, 1000); // 1s visible
      };

      cycle();
    }, 3000);

    return () => {
      if (showTimeout.current) clearTimeout(showTimeout.current);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [hasHovered]);

	const handleHover = () => {
		if (hasHovered) return;
		setHasHovered(true);


		if (showTimeout.current) clearTimeout(showTimeout.current);
		if (hideTimeout.current) clearTimeout(hideTimeout.current);

		setMessage("Looking this good ain't easy");
		setTimeout(() => setMessage("welcome to my portfolio"), 2000);
		setTimeout(() => setMessage(""), 3500);
	};

	return (
		<div className="relative shrink-0" onMouseOver={handleHover}>
			{message && <span className="speech-bubble">{message}</span>}
			<div className="relative overflow-hidden shrink-0 group">
				<img
					src={headshot}
					className="rounded-lg"
					alt="headshot of Donovan Jabbar"
				/>
				<img
					src={glasses}
					className="absolute -left-10 transition-all ease-out duration-200 group-hover:top-[22px] group-hover:left-[29px] w-[40px]"
					alt="8-bit glasses"
				/>
			</div>
		</div>
	);
};

export default AttentionHover;
