import AnimatedContent from "../animetion/Animated Content/animated";

const Experience = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-4 py-24 mx-auto relative">
          <div className="timeline-line"></div>

          <div className="title">
            <span>Experience</span>
          </div>

          <div className="flex flex-col flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 card-width ">
              <div className="dot"></div>
              <AnimatedContent
                distance={200}
                direction="horizontal"
                reverse={true}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <div>
                  <div className="h-full exp-card bg-opacity-75 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-start relative w-50">
                    <h2 className="tracking-widest text-2xl title-font font-normal title text-white mb-2">
                      Web Developer
                    </h2>
                    <p className="leading-relaxed mb-3">
                      Acmegrade · Internship <br /> Mar 2025 - May 2025 · 3 mos{" "}
                      <br />
                      work from home · Remote <br />
                    </p>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>

          <div className="flex flex-col flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 card-width justify-items-end ">
              <div className="dot-right"></div>
              <AnimatedContent
                distance={200}
                direction="horizontal"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <div>
                  <div className="h-full exp-card bg-opacity-75 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-end relative w-50">
                    <h2 className="tracking-widest text-2xl title-font font-normal title text-white mb-2">
                      Web Development Intern
                    </h2>
                    <p className="leading-relaxed mb-3">
                      CODTECH IT SOLUTIONS · Internship <br /> Oct 2024 - Nov
                      2024 · 2 mos <br /> Greater Noida · Remote <br />
                    </p>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>

          <div className="flex flex-col flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 card-width ">
              <div className="dot"></div>
              <AnimatedContent
                distance={200}
                direction="horizontal"
                reverse={true}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <div>
                  <div className="h-full exp-card bg-opacity-75 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-start relative w-50">
                    <h2 className="tracking-widest text-2xl title-font font-normal title text-white mb-2">
                      Student Intern
                    </h2>
                    <p className="leading-relaxed mb-3">
                      Prodigy Infotech · Internship <br /> Aug 2024 - Sep 2024 ·
                      2 mos <br />
                      Greater Noida · Remote <br />
                    </p>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Experience;
