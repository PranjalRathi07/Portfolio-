import AnimatedContent from "../animetion/Animated Content/animated";

const Projects = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 py-24 mx-auto">
        <div className="title">
          <span>Projects</span>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.1}
            >
              <div>
                <div className="h-full skill-card bg-opacity-75 px-8 pt-16 pb-15 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium title text-white mb-3">
                    Complaint Management System
                  </h2>
                  <p className="leading-relaxed mb-3">
                    A web-based application designed to streamline the process
                    of lodging, tracking, and resolving complaints for
                    organizations, enhancing customer satisfaction and
                    operational efficiency.
                  </p>
                  <a
                    target="blank"
                    className="link inline-flex items-center"
                    href="https://github.com/PranjalRathi07/Complaint-Management-System"
                  >
                    Github
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedContent>
          </div>

          <div className="p-4 lg:w-1/3">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={true}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.1}
            >
              <div>
                <div className="h-full skill-card bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium title text-white mb-5">
                    Currency Converter
                  </h2>
                  <p className="leading-relaxed mb-3">
                    A web application that allows users to convert amounts
                    between different currencies using real-time exchange rates.
                    Using APIs to fetch the latest currency data.
                  </p>
                  <a
                    target="blank"
                    className="link inline-flex items-center"
                    href="https://github.com/PranjalRathi07/Currency-Converter"
                  >
                    Github
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedContent>
          </div>

          <div className="p-4 lg:w-1/3">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.1}
            >
              <div>
                <div className="h-full skill-card bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium title text-white mb-5">
                    E-commerce Website
                  </h2>
                  <p className="leading-relaxed mb-3">
                    An e-commerce website that offers a seamless online shopping
                    experience with a wide range of products. Features include
                    shopping cart. It is built using html, css only.
                  </p>
                  <a
                    target="blank"
                    className="link inline-flex items-center"
                    href="https://github.com/PranjalRathi07/E-commerce"
                  >
                    Github
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
