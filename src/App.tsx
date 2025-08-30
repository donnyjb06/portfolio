import Experiences from "./components/Experiences";
import GridContainer from "./components/GridContainer";
import Summary from "./components/Summary";
import Technologies from "./components/Technologies";
import { StarsBackground } from "./components/animate-ui/backgrounds/stars";
import ThemeProvider from "./context/Theme/Theme.provider";
import { MOTION_DELAY } from "./lib/constants";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Connect from "./components/Connect";
import CustomCursor from "./components/CustomCursor";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";

const CELLS = [
	Summary,
	Technologies,
	Experiences,
	Projects,
	Certifications,
	Connect,
];
function App() {
	return (
		<ThemeProvider>
			<Analytics />
			<SpeedInsights />
			<CustomCursor />
			<StarsBackground className="fixed inset-0 flex items-center justify-center min-h-full" />
			<GridContainer>
				{CELLS.map((Cell, i) => {
					return <Cell key={i} delay={MOTION_DELAY * i} />;
				})}
			</GridContainer>
		</ThemeProvider>
	);
}

export default App;
