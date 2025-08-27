import type { Props } from "../types/ui";

const GridContainer = ({children}: Props) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[276px_100px_auto_168px] gap-4 md:gap-5 lg:gap-6 max-w-screen-xl h-full lg:max-h-[800px] mx-auto my-auto">
			{children}
		</div>
	);
};

export default GridContainer;
