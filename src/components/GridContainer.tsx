import type { Props } from "../types/ui";

const GridContainer = ({children}: Props) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-[2fr_1fr_3fr_1fr] lg:grid-cols-3 lg:grid-rows-[276px_100px_1fr_168px] gap-4 md:gap-5 lg:gap-6 max-w-screen-xl h-full lg:max-h-[800px] mx-auto relative grow lg:grow-0">
			{children}
		</div>
	);
};

export default GridContainer;
