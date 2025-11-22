/** @format */
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      className="container col-xxl-8 px-4 py-5"
      style={{ height: "100vh", marginTop: "50px" }}
    >
      {" "}
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        {" "}
        <div className="col-10 col-sm-8 col-lg-6">
          {" "}
          <motion.div
            initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
            whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
          >
            {" "}
            <img
              src=".\src\assets\Sasuke Uchia - Desktop Wallpaper - Landscape.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </motion.div>{" "}
        </div>{" "}
        <div className="col-lg-6">
          {" "}
          <h1
            className="display-5 fw-bold  lh-1 mb-3"
            style={{ color: "#64FFDA" }}
          >
            Hi, I'm a Pranjal Rathi.
          </h1>{" "}
          <h6 className="display-5 fw-bold mb-3" style={{ color: "#64FFDA" }}>
            Front-end developer;
          </h6>
          <p className="lead" style={{ color: "#CCD6F6" }}>
            "Building fast, modern, and responsive web apps"
          </p>{" "}
          <div className="h-10 overflow-hidde d-flex justify-start space-x-4 not-last:">
            <a href="https://github.com/PranjalRathi07" target="blank">
              <img className="h-9 w-9" src="src\assets\github.png" />
            </a>

            <a href="https://www.linkedin.com/in/pranjal-rathi/" target="blank">
              <img className="h-9 w-9" src="src\assets\Linkdin.png" />
            </a>

            <a href="mailto:rathipranjal123@gmail.com" target="blank">
              <img className="h-9 w-9" src="src\assets\gmail.png" />
            </a>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Hero;
