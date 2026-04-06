/** @format */
import Galaxy from "./component/Galaxy";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyMe from "./components/Why_me";
import MarqueeStrip from "./components/MarqueeStrip";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
	return (
		<div className='w-full min-h-screen bg-black relative overflow-hidden scroll-smooth'>
			<Navbar />
			<div className='fixed inset-0 z-0 pointer-events-auto'>
				<Galaxy
					mouseRepulsion
					mouseInteraction
					density={1}
					glowIntensity={0.2}
					saturation={0}
					hueShift={140}
					twinkleIntensity={0.3}
					rotationSpeed={0.1}
					repulsionStrength={2}
					autoCenterRepulsion={0}
					starSpeed={0.5}
					speed={1}
				/>
			</div>
			<Hero />
			<About />
			<WhyMe />
			<MarqueeStrip />
			<Services />
			<Contact />
		</div>
	);
}

export default App;
