import AnimatedContent from "../animetion/Animated Content/animated";

const Education = () => {
  return (
    <>
      <div
        className="certification-container c-section"
        style={{ overflow: "hidden" }}
      >
        <div className="edu-container exp-card">
          <div className="col py-10 px-12">
            <span className="title">Education</span>
            <div className=" h-105 w-[990px] py-8 px-10">
              <div className="edu-line"></div>
              <div className="edu-dot"></div>
              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={false}
                duration={1}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.1}
              >
                <div className="h-[40%] min-w-[60%] mb-8 p-2 flex items-center">
                  <p className="lead text-white mb-3">
                    <strong className="underline underline-offset-2">
                      GRADUATION
                    </strong>
                    <br />
                    G.l bajaj institute of management.
                    <br />
                    Bachlor of Computer Application(BCA).
                    <br />
                    2023-2026.
                  </p>
                  <img
                    className="edu-imgSize ml-100 rounded-xl"
                    src="src\assets\846imguf_LogoGLBajaj.jpg"
                  />
                </div>
              </AnimatedContent>
              <div className="edu-dot"></div>
              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={true}
                duration={1}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.1}
              >
                <div className="h-[40%] min-w-[60%] p-2 flex items-center">
                  <p className="lead text-white mb-3">
                    <strong className="underline underline-offset-2">
                      INTERMIDEATE
                    </strong>
                    <br />
                    Dheradun Public School.
                    <br />
                    Passout year 2023.
                  </p>
                  <img
                    className="edu-imgSize ml-130 rounded-xl"
                    src="src\assets\cropped-Seal_Blue-e1742900261172.png"
                  />
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
