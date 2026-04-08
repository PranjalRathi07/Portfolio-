/** @format */

import React, { useEffect, useRef } from "react";

export default function PhoneMockup() {
	const containerRef = useRef(null);
	const phoneRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current || !phoneRef.current) return;
			const rect = containerRef.current.getBoundingClientRect();
			const viewportHeight = window.innerHeight;

			// Calculate progress over the entire time the element is on screen.
			let scrollDistance = viewportHeight - rect.top;
			let progress = scrollDistance / (viewportHeight + rect.height);
			progress = Math.max(0, Math.min(1, progress));

			// Rotates a full 360 degrees smoothly without ever stopping:
			// Starts at the back (180deg) -> faces front when centered (0deg) -> spins away to back (-180deg).
			const currentRotation = 180 - progress * 360;
			phoneRef.current.style.transform = `rotateY(${currentRotation}deg)`;
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initialize on mount

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className='relative w-full py-10 flex items-center justify-center z-10'
			ref={containerRef}>
			{/* Background glow */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#3b82f6]/10 blur-[100px] rounded-full pointer-events-none z-0' />

			{/* Phone wrapper for perspective */}
			<div className='relative perspective-[1400px]'>
				{/* Dedicated Scroll Rotation Wrapper (Decoupled from Keyframe!) */}
				<div
					ref={phoneRef}
					className='relative flex items-center justify-center'
					style={{
						transformStyle: "preserve-3d",
						transition: "transform 0s linear",
					}}>
					{/* Floating Animation Wrapper */}
					<div
						className='relative animate-[floatPhone_5s_ease-in-out_infinite]'
						style={{ transformStyle: "preserve-3d" }}>
						{/* Outer shadow */}
						<div className='absolute inset-0 rounded-[3.2rem] bg-black/40 blur-2xl scale-105 translate-y-6' />

						{/* Phone body */}
						<div
							className='relative w-[320px] h-[650px] shadow-[0_30px_80px_rgba(0,0,0,0.7)]'
							style={{ transformStyle: "preserve-3d" }}>
							{/* 3D Bezel Thickness Stack */}
							{[...Array(12)].map((_, i) => (
								<div
									key={`layer-${i}`}
									style={{ transform: `translateZ(${(i - 5.5) * 2}px)` }}
									className='absolute inset-0 rounded-[3.2rem] bg-[linear-gradient(145deg,#1f232b,#0b0d12_35%,#2e3440)] border border-[#2e3440]/30 shadow-[inset_0_0_8px_rgba(0,0,0,0.5)]'
								/>
							))}

							{/* Metallic edge highlight (Front Rim) */}
							<div
								className='absolute inset-px rounded-[3.1rem] pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_18%,transparent_82%,rgba(255,255,255,0.08))]'
								style={{ transform: "translateZ(11px)" }}
							/>

							{/* Metallic edge highlight (Back Rim) */}
							<div
								className='absolute inset-px rounded-[3.1rem] pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_18%,transparent_82%,rgba(255,255,255,0.08))]'
								style={{ transform: "rotateY(180deg) translateZ(11px)" }}
							/>

							{/* Buttons */}
							<div
								className='absolute -left-[3px] top-[140px] h-[64px] w-[4px] rounded-[4px] bg-zinc-600/90 shadow-[inset_1px_0_2px_rgba(255,255,255,0.2)]'
								style={{ transform: "translateZ(0px)" }}
							/>
							<div
								className='absolute -right-[3px] top-[170px] h-[90px] w-[4px] rounded-[4px] bg-zinc-600/90 shadow-[inset_-1px_0_2px_rgba(255,255,255,0.2)]'
								style={{ transform: "translateZ(0px)" }}
							/>

							{/* FRONT FACE (Screen) */}
							<div
								className='absolute inset-[8px] rounded-[2.7rem] overflow-hidden bg-[radial-gradient(circle_at_70%_20%,rgba(40,80,255,0.12),transparent_25%),linear-gradient(180deg,#05070c,#020305)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]'
								style={{
									backfaceVisibility: "hidden",
									transform: "translateZ(12px)",
								}}>
								{/* Top notch / dynamic island */}
								<div className='absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[28px] rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] z-20' />

								{/* Status */}
								<div className='absolute top-5 left-6 right-6 flex items-center justify-between text-[13px] text-white/90 font-medium z-10'>
									<span>10:00</span>
									<div className='flex items-center gap-2'>
										<span className='h-[6px] w-[6px] rounded-full bg-white/80' />
										<span className='h-[10px] w-[14px] rounded-[3px] border border-white/80' />
									</div>
								</div>

								{/* Content */}
								<div className='relative z-10 px-6 pt-20 pb-6 text-white'>
									<h3 className='text-[22px] font-semibold tracking-tight'>
										System Health
									</h3>

									<div className='mt-6 rounded-[2rem] border border-white/5 bg-[linear-gradient(180deg,rgba(20,24,34,0.92),rgba(8,10,16,0.95))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_10px_40px_rgba(0,0,0,0.35)]'>
										<div className='flex items-start justify-between'>
											<div>
												<p className='text-sm text-white/45'>Backend Uptime</p>
												<h4 className='mt-2 text-[56px] leading-none font-bold tracking-tight'>
													99.9<span className='text-[40px]'>%</span>
												</h4>
											</div>

											<div className='rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-400 flex items-center gap-1.5'>
												<span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse'></span>
												LIVE
											</div>
										</div>

										{/* Graph */}
										<div className='relative mt-6 h-[170px] overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_75%_20%,rgba(59,130,246,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]'>
											<svg
												viewBox='0 0 300 160'
												className='absolute inset-0 h-full w-full'
												preserveAspectRatio='none'>
												<defs>
													<linearGradient
														id='lineGlow'
														x1='0'
														y1='0'
														x2='1'
														y2='0'>
														<stop offset='0%' stopColor='#2563eb' />
														<stop offset='100%' stopColor='#60a5fa' />
													</linearGradient>
													<linearGradient
														id='fillGlow'
														x1='0'
														y1='0'
														x2='0'
														y2='1'>
														<stop
															offset='0%'
															stopColor='rgba(96,165,250,0.35)'
														/>
														<stop
															offset='100%'
															stopColor='rgba(96,165,250,0)'
														/>
													</linearGradient>
												</defs>

												<path
													d='M0,128 C40,132 70,122 105,100 C145,76 175,48 215,34 C245,24 272,22 300,18 L300,160 L0,160 Z'
													fill='url(#fillGlow)'
												/>
												<path
													d='M0,128 C40,132 70,122 105,100 C145,76 175,48 215,34 C245,24 272,22 300,18'
													fill='none'
													stroke='url(#lineGlow)'
													strokeWidth='5'
													strokeLinecap='round'
												/>
											</svg>

											<div className='absolute right-4 top-[18px] h-4 w-4 rounded-full bg-white shadow-[0_0_22px_rgba(255,255,255,0.95)]' />
										</div>
									</div>

									{/* Bottom cards */}
									<div className='mt-5 grid grid-cols-2 gap-4'>
										<div className='rounded-[1.6rem] border border-white/5 bg-[linear-gradient(180deg,rgba(20,24,34,0.9),rgba(8,10,16,0.95))] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'>
											<div className='text-[20px] font-bold'>12ms</div>
											<div className='mt-2 text-[10px] sm:text-xs tracking-widest text-white/40'>
												AVG LATENCY
											</div>
										</div>

										<div className='rounded-[1.6rem] border border-white/5 bg-[linear-gradient(180deg,rgba(20,24,34,0.9),rgba(8,10,16,0.95))] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'>
											<div className='text-[20px] font-bold'>0%</div>
											<div className='mt-2 text-[10px] sm:text-xs tracking-[0.08em] uppercase text-white/40'>
												DATA LOSS
											</div>
										</div>
									</div>
								</div>

								{/* Screen reflection */}
								<div className='pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.11)_0%,rgba(255,255,255,0.03)_18%,transparent_36%,transparent_100%)]' />
							</div>

							{/* BACK FACE (Camera) */}
							<div
								className='absolute inset-[8px] rounded-[2.7rem] overflow-hidden bg-[#0a0c10] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]'
								style={{
									backfaceVisibility: "hidden",
									transform: "rotateY(180deg) translateZ(12px)",
								}}>
								{/* Soft backside gradient check */}
								<div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,80,255,0.05),transparent_50%)]' />

								{/* Dual Camera Module */}
								<div className='absolute top-8 left-8 w-[80px] h-[150px] rounded-[2rem] bg-[linear-gradient(145deg,#1f232b,#0b0d12)] border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.1)] p-2.5 flex flex-col justify-between items-center z-10'>
									{/* Lens 1 */}
									<div className='relative w-[55px] h-[55px] rounded-full bg-black border border-[#2a2c33] shadow-[inset_0_4px_8px_rgba(0,0,0,0.9),0_2px_4px_rgba(255,255,255,0.1)] flex items-center justify-center'>
										<div className='w-7 h-7 rounded-full bg-[#0d1320] border-2 border-[#1e293b]/80 shadow-[inset_0_0_4px_rgba(0,0,0,1)] flex items-center justify-center'>
											<div className='w-2 h-2 rounded-full bg-cyan-500/20 translate-x-1 -translate-y-1' />
										</div>
									</div>
									{/* Lens 2 */}
									<div className='relative w-[55px] h-[55px] rounded-full bg-black border border-[#2a2c33] shadow-[inset_0_4px_8px_rgba(0,0,0,0.9),0_2px_4px_rgba(255,255,255,0.1)] flex items-center justify-center mt-auto'>
										<div className='w-7 h-7 rounded-full bg-[#0d1320] border-2 border-[#1e293b]/80 shadow-[inset_0_0_4px_rgba(0,0,0,1)] flex items-center justify-center'>
											<div className='w-2 h-2 rounded-full bg-blue-500/20 translate-x-1 -translate-y-1' />
										</div>
									</div>
								</div>

								{/* Flash & Microphones */}
								<div className='absolute top-[50px] left-[105px] w-5 h-5 rounded-full bg-yellow-100/90 shadow-[0_0_12px_rgba(255,255,200,0.8),inset_0_1px_2px_rgba(0,0,0,0.5)] border border-yellow-200/20' />
								<div className='absolute top-[90px] left-[108px] w-3.5 h-3.5 rounded-full bg-black border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,1)]' />

								{/* Center Logo Placeholder */}
								<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
									<div className='w-12 h-12 rounded-full border-2 border-white/5 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]'>
										<div className='w-5 h-5 border border-white/10 rounded-sm rotate-45'></div>
									</div>
								</div>

								{/* Back surface reflection */}
								<div className='pointer-events-none absolute inset-0 bg-[linear-gradient(225deg,rgba(255,255,255,0.05)_0%,transparent_30%,transparent_100%)]' />
							</div>
						</div>
					</div>
				</div>
			</div>

			<style>{`
        @keyframes floatPhone {
          0%, 100% {
            transform: rotateY(-18deg) rotateX(10deg) rotateZ(1deg) translateY(0px);
          }
          50% {
            transform: rotateY(-18deg) rotateX(10deg) rotateZ(1deg) translateY(-10px);
          }
        }
      `}</style>
		</div>
	);
}
