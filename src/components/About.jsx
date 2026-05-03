/** @format */

import React from "react";
import devnix from "../assets/pfp1.png";

const About = () => {
	return (
		<section
			id='about'
			className='relative w-full bg-transparent py-20 px-6 md:px-12 flex justify-center font-sans overflow-hidden'>
			{/* Subtle Background Glow & Grid/Noise effect (simulated) using faster radial gradient instead of blur */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(9,9,12,0.6)_0%,transparent_70%)] pointer-events-none'></div>

			{/* Main Card Container */}
			<div className='w-full max-w-[1200px] bg-[#09090c] border border-white/4 rounded-[2.5rem] p-8 md:p-14 lg:p-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center shadow-2xl shadow-black/50 hover:border-[#5a8ee2] transition-colors duration-300'>
				{/* Left: Image Container */}
				<div className='relative w-full max-w-[400px] lg:w-[45%] aspect-4/5 rounded-3xl overflow-hidden shrink-0'>
					{/* The Portrait Image (Replace src with your actual image path) */}
					<img
						src={devnix}
						alt='Devnix.Studio'
						className='w-full h-full object-cover rounded-3xl'
						loading='lazy'
					/>

					{/* Dark gradient overlay to match the moody lighting */}
					<div className='absolute inset-0 bg-linear-to-t from-[#09090c] via-transparent to-transparent opacity-80 pointer-events-none'></div>

					{/* Status Pill overlaid on the image */}
					<div className='absolute bottom-8 left-12 flex items-center gap-2.5 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full z-10'>
						<span className='w-2 h-2 bg-[#22c55e] rounded-full shadow-[0_0_8px_#22c55e]'></span>
						<span className='text-white text-[11px] font-bold tracking-wide'>
							Online & Creating
						</span>
					</div>
				</div>

				{/* Right: Content Section */}
				<div className='w-full lg:w-[55%] flex flex-col'>
					{/* Section Title */}
					<h2 className='text-5xl md:text-6xl font-black text-white tracking-tight uppercase mb-5'>
						MEET <span className='text-[#3b82f6]'>PRANJAL.</span>
					</h2>

					{/* Subtitle with line */}
					<div className='flex items-center gap-4 mb-8'>
						<div className='w-12 h-px bg-[#3b82f6]/50'></div>
						<span className='text-[#3b82f6] text-[11px] font-bold tracking-[0.2em] uppercase'>
							QUALITY-FOCUSED ENGINEER
						</span>
					</div>

					{/* Description Paragraph */}
					<p className='text-[#9ca3af] text-[15px] md:text-[16px] leading-relaxed font-light mb-12'>
						I combine architectural thinking with technical precision to build
						robust, scalable software solutions.{" "}
						<span className='text-white font-semibold underline decoration-white/30 underline-offset-4'>
							With a background in quality control,
						</span>
						I ensure every line of code is optimized for performance,
						maintainability, and seamless user experiences.
					</p>

					{/* Stats Grid */}
					<div className='grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5 mb-12'>
						{/* Stat Box 1 */}
						<div className='bg-[#000000] border border-white/10 rounded-2xl p-6 flex flex-col justify-center transition-colors hover:border-[#5a8ee2]'>
							<span className='text-3xl md:text-4xl font-bold text-white mb-1.5'>
								4+
							</span>
							<span className='text-[10px] text-[#6b7280] font-bold uppercase tracking-widest'>
								YEARS EXPERIENCE
							</span>
						</div>

						{/* Stat Box 2 */}
						<div className='bg-[#000000] border border-white/10 rounded-2xl p-6 flex flex-col justify-center transition-colors hover:border-[#5a8ee2]'>
							<span className='text-3xl md:text-4xl font-bold text-white mb-1.5'>
								100+
							</span>
							<span className='text-[10px] text-[#6b7280] font-bold uppercase tracking-widest'>
								PROJECTS DONE
							</span>
						</div>

						{/* Stat Box 3 */}
						<div className='bg-[#000000] border border-white/10 rounded-2xl p-6 flex flex-col justify-center transition-colors hover:border-[#5a8ee2]'>
							<span className='text-3xl md:text-4xl font-bold text-white mb-1.5'>
								100%
							</span>
							<span className='text-[10px] text-[#6b7280] font-bold uppercase tracking-widest'>
								QUALITY SCORE
							</span>
						</div>
					</div>

					{/* Call to Action & Quote Row */}
					<div className='flex flex-col sm:flex-row items-start sm:items-center gap-6'>
						<a
							href='#contact'
							className='bg-white text-black text-[12px] font-extrabold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-gray-200 hover:scale-105 transition duration-300 shrink-0'>
							LET'S TALK
						</a>
						<span className='text-[#6b7280] italic text-[14px]'>
							"The art of precision-driven engineering."
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
