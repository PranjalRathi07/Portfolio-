/** @format */

import React from "react";
import cover1 from "../assets/cover1.png";
import cover2 from "../assets/cover2.png";
import cover3 from "../assets/cover3.png";
import cover4 from "../assets/cover4.png";
import cover5 from "../assets/cover5.png";

const Services = () => {
	// Data array for your projects
	const projects = [
		{
			title: "SpamLe - 1",
			image: cover1,
			link: "https://landing-page2-nine-ashy.vercel.app",
		},
		{
			title: "Sample - 2",
			image: cover2,
			link: "https://landing-page-lkaz.vercel.app",
		},
		{
			title: "Sample - 3",
			image: cover3,
			link: "https://landing-page4-tau.vercel.app",
		},
		{
			title: "Sample - 4",
			image: cover4,
			link: "https://landing-page9-sigma.vercel.app",
		},
		{
			title: "Sample - 5",
			image: cover5,
			link: "https://landing-page45-one.vercel.app",
		},
	];

	return (
		<>
			{/* Main Section Wrapper */}
			<section
				id='services'
				className='relative w-full flex flex-col bg-transparent overflow-hidden pt-20 font-sans selection:text-white'>
				{/* Subtle Background Glow & Grid/Noise effect (simulated) */}
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px]  blur-[100px] rounded-[100%] pointer-events-none'></div>

				{/* Content Container */}
				<div className='px-6 md:px-12 lg:px-24 w-full relative z-10'>
					{/* --- HEADER SECTION --- */}
					<div className='flex flex-col md:flex-row md:justify-between items-start md:items-end mb-16 md:mb-24'>
						<div className='flex flex-col leading-[0.85]'>
							<h2 className='text-white text-6xl md:text-8xl lg:text-[140px] font-black uppercase tracking-tighter'>
								SELECTED
							</h2>
							<h2 className='text-[#222222] text-6xl md:text-8xl lg:text-[140px] font-black uppercase tracking-tighter'>
								WORKS.
							</h2>
						</div>

						<div className='mt-8 md:mt-0 text-[#888888] text-sm md:text-base max-w-[280px] md:text-right font-medium leading-relaxed'>
							A curation of high-performing assets created for clients globally.
							<br />
							Click to view.
						</div>
					</div>

					{/* --- GRID SECTION --- */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 pb-24'>
						{projects.map((project, index) => (
							<div
								key={index}
								onClick={() =>
									window.open(project.link, "_blank", "noopener,noreferrer")
								}
								className='group cursor-pointer flex flex-col w-full relative overflow-hidden rounded-[20px] aspect-4/3 bg-[#111111]'>
								{/* Bottom Gradient for Text Readability */}
								<div className='absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-trom-black/90 via-black/40 to-transparent z-10'></div>

								{/* Link Icon overlay */}
								<div className='absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none'>
									<div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(79,139,255,0.3)]'>
										<svg
											className='w-8 h-8 text-white'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
											/>
										</svg>
									</div>
								</div>

								{/* Thumbnail Image */}
								<img
									src={project.image}
									alt={project.title}
									className='absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-sm z-0'
									loading='lazy'
								/>

								{/* Tags and Title (On Image) */}
								<div className='absolute bottom-6 left-6 right-6 z-30 flex flex-col items-start transition-transform duration-500 ease-out group-hover:-translate-y-3'>
									<div className='bg-white text-black text-[10px] md:text-xs font-black px-3 py-1.5 uppercase w-max mb-2 tracking-widest'>
										{project.category}
									</div>
									<h3 className='text-white text-2xl md:text-2xl font-black italic uppercase tracking-wide drop-shadow-lg text-left'>
										{project.title}
									</h3>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* --- PREMIUM BOTTOM BORDER DIVIDER --- */}
				{/* This creates the exact subtle line shown in the screenshot separating the sections */}
				<div className='w-full h-1.5 bg-linear-to-r from-transparent via-[#4F8BFF] to-transparent'></div>
			</section>
		</>
	);
};

export default Services;
