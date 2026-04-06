/** @format */

import React from "react";

const MarqueeStrip = () => {
	const words = [
		"REACT",
		"NODE",
		"TAILWIND",
		"TYPESCRIPT",
		"JAVASCRIPT",
		"JAVA",
		"SQL",
		"MONGODB",
	];

	return (
		<section className='relative w-full h-[120px] sm:h-[150px] overflow-visible flex items-start justify-center z-20 -mt-5 sm:-mt-5'>
			{/* 🔥 DARK OUTER BAND (important for surround effect) */}
			<div className='absolute w-[120%] -rotate-2 bg-black py-2 shadow-[0_0_40px_rgba(0,0,0,0.6)]'>
				{/* Top oval dotted line */}
				<div
					className='absolute top-0 left-0 w-full h-[2px]
	bg-[radial-gradient(ellipse,#2f6df6_40%,transparent_42%)]
	bg-size-[40px_6px] bg-repeat-x'></div>

				{/* Bottom oval dotted line */}
				<div
					className='absolute bottom-0 left-0 w-full h-[2px]
	bg-[radial-gradient(ellipse,#2f6df6_40%,transparent_42%)]
	bg-size-[40px_6px] bg-repeat-x bg-bottom'></div>

				{/* 🔷 INNER BLUE STRIP */}
				<div
					className='relative mx-auto w-[98%] overflow-hidden py-4 sm:py-5
					bg-linear-to-r from-[#3b82f6] via-[#2f6df6] to-[#3b82f6]
					shadow-[0_0_25px_rgba(59,130,246,0.25)]
					before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-white/20
					after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-black/30'>
					{/* 🚀 marquee content */}
					<div className='flex whitespace-nowrap animate-marquee'>
						{[...Array(4)].map((_, setIndex) => (
							<div key={setIndex} className='flex items-center shrink-0'>
								{words.map((word, wordIndex) => (
									<React.Fragment key={`${setIndex}-${wordIndex}`}>
										<span className='text-white text-5xl sm:text-6xl md:text-7xl font-black italic uppercase tracking-tight px-6 md:px-8'>
											{word}
										</span>
										<span className='text-white text-3xl sm:text-4xl md:text-5xl px-2'>
											★
										</span>
									</React.Fragment>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default MarqueeStrip;
