/** @format */

const Aboutme = () => {
  return (
    <>
      <div className="container my-5" style={{ height: "100vh" }}>
        {" "}
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center  shadow-lg">
          {" "}
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            {" "}
            <h1 className="display-4 fw-bold lh-1" style={{ color: "#64FFDA" }}>
              ABOUT ME
            </h1>{" "}
            <p className="lead" style={{ color: "#CCD6F6" }}>
              Hi, I'm Pranjal Rathi, a highly motivated Web Developer. I
              specializing in the MERN stack, focusing on building scalable
              backend APIs and intuitive React.js frontends. I believe that
              clean, well-documented code is the foundation of any successful
              project, and I am driven by a passion for continuous learning and
              problem-solving. When I'm not coding, you can find me playing
              football or training at the gym. Please explore my projects to see
              my work, and let's connect to discuss how I can bring value to
              your team.
            </p>{" "}
          </div>{" "}
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            {" "}
            <img
              className="rounded-lg-3"
              src=".\src\assets\bmw-m5-m-3840x2160-21070.jpg"
              alt=""
              width="720"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default Aboutme;
