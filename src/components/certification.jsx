import { a } from "motion/react-client";
import CardSwap, { Card } from "../animetion/CardSwap";

const Cretification = () => {
  return (
    <>
      <div
        className="certification-container c-section"
        style={{ overflow: "hidden" }}
      >
        <div className="cert-container exp-card">
          <div className="col py-10 px-12">
            <span className="title">Certificates</span>
            <p className="lead mb-3 text-white">
              I am dedicated to continuous learning and keeping up <br /> with
              the latest technologies. They are the certifications <br /> I have
              earned to expand my skill set and deepen my <br />
              technical knowledge.{" "}
            </p>
          </div>

          <div
            className="col"
            style={{
              position: "absolute",
              top: "460px",
              left: "1100px",
            }}
          >
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={true}
            >
              <Card>
                <h3 className="title" style={{ color: "#64FFDA" }}>
                  DSA WITH JAVA
                </h3>
                <p className="lead mb-3 text-white">
                  Completed "Data Structures and Algorithms in Java" course by
                  G.l Bajaj Institute of Technology and Management.
                  <br />
                  <br />
                  <a
                    target="blank"
                    className="link inline-flex items-center"
                    href="https://www.linkedin.com/in/pranjal-rathi/overlay/1752311178969/single-media-viewer/?profileId=ACoAAEMCroMBf0uzPXugQSxENo-Nc8Eziaz5NOY"
                  >
                    Click to View Certificate
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
                </p>
              </Card>
              <Card>
                <h3 className="title" style={{ color: "#64FFDA" }}>
                  Training in Core Java and Web skills
                </h3>
                <p className="lead mb-3 text-white">
                  I have successfully completed a training program in Core Java
                  and Web skills.
                  <br />
                  <br />
                  <a
                    target="blank"
                    className="link inline-flex items-center"
                    href="https://www.linkedin.com/in/pranjal-rathi/details/certifications/1739112104765/single-media-viewer/?profileId=ACoAAEMCroMBf0uzPXugQSxENo-Nc8Eziaz5NOY"
                  >
                    Click to View Certificate
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
                </p>
              </Card>
              <Card>
                <h3 className="title" style={{ color: "#64FFDA" }}>
                  Web Development
                </h3>
                <p className="lead mb-3 text-white">
                  Completed "Web Development" virtual intership from Acmegrade
                  duration 2 months.
                  <br />
                  <br />
                  <a
                    target="blank"
                    className="link inline-flex items-center"
                    href="https://www.linkedin.com/in/pranjal-rathi/details/certifications/1764408528876/single-media-viewer/?profileId=ACoAAEMCroMBf0uzPXugQSxENo-Nc8Eziaz5NOY"
                  >
                    Click to View Certificate
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
                </p>
              </Card>
              <Card>
                <h3 className="title" style={{ color: "#64FFDA" }}>
                  Web Development
                </h3>
                <p className="lead mb-3 text-white">
                  Completed "Web Development" virtual intership course on
                  Coursera by CODTECH IT SOLUTION. Learned HTML, CSS,
                  JavaScript, and more.
                  <br />
                  <br />
                  <a
                    target="blank"
                    className="link inline-flex items-center"
                    href="https://www.linkedin.com/in/pranjal-rathi/details/certifications/1734242777307/single-media-viewer/?profileId=ACoAAEMCroMBf0uzPXugQSxENo-Nc8Eziaz5NOY"
                  >
                    Click to View Certificate
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
                </p>
              </Card>
              <Card>
                <h3 className="title" style={{ color: "#64FFDA" }}>
                  Web Development
                </h3>
                <p className="lead mb-3 text-white">
                  Completed "Web Development" virtual internship of 1 month
                  course on Coursera by Prodigy InfoTech.
                  <br />
                  <br />
                  <a
                    target="blank"
                    className="link inline-flex items-center"
                    href="https://www.linkedin.com/in/pranjal-rathi/details/certifications/1726985176120/single-media-viewer/?profileId=ACoAAEMCroMBf0uzPXugQSxENo-Nc8Eziaz5NOY"
                  >
                    Click to View Certificate
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
                </p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cretification;
