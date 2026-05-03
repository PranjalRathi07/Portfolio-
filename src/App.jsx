/** @format */
import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Galaxy from "./component/Galaxy";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const WhyMe = lazy(() => import("./components/Why_me"));
const MarqueeStrip = lazy(() => import("./components/MarqueeStrip"));
const Services = lazy(() => import("./components/Services"));
// const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
	const [showGalaxy, setShowGalaxy] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);

		const timer = setTimeout(() => {
			setShowGalaxy(true);
		}, 800);

		return () => {
			clearTimeout(timer);
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	return (
		<div className='w-full min-h-screen bg-black relative scroll-smooth sm:overflow-x-visible overflow-x-hidden'>
			<Navbar />

			{/* The background Galaxy Container */}
			<motion.div
				style={{ willChange: "clip-path" }}
				initial={{ clipPath: "circle(0% at 50% 50%)" }}
				animate={{
					clipPath: showGalaxy
						? "circle(150% at 50% 50%)"
						: "circle(0% at 50% 50%)",
				}}
				transition={{ duration: 4, ease: [0.25, 1, 0.4, 1] }}
				className='fixed inset-0 z-0 pointer-events-auto'>
				<Galaxy
					mouseRepulsion={!isMobile}
					mouseInteraction={!isMobile}
					density={isMobile ? 0.5 : 1}
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
			</motion.div>

			{/* The Wave / Shockwave Effect overlaying the expansion */}
			{showGalaxy && (
				<>
					{/* Primary Wave */}
					<motion.div
						style={{ willChange: "transform, opacity" }}
						initial={{ scale: 0, opacity: 0.8, x: "-50%", y: "-50%" }}
						animate={{ scale: 1, opacity: 0, x: "-50%", y: "-50%" }}
						transition={{ duration: 6, ease: [0.25, 1, 0.4, 1] }}
						className='fixed top-1/2 left-1/2 w-[300vmax] h-[300vmax] rounded-full border-2 border-white/40 shadow-[0_0_100px_40px_rgba(255,255,255,0.5),inset_0_0_80px_20px_rgba(255,255,255,0.5)] pointer-events-none z-0'
					/>
				</>
			)}

			<Hero />
			<Suspense fallback={<div className='h-screen bg-transparent'></div>}>
				<About />
				<WhyMe />
				<MarqueeStrip />
				<Services />
				{/* <Contact /> */}
				<Footer />
			</Suspense>
		</div>
	);
}

export default App;
