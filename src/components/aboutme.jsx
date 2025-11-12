/** @format */

const Aboutme = () => {
  return (
    <>
      <div className="container my-5" style={{ height: "100vh" }}>
        {" "}
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          {" "}
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            {" "}
            <h1 className="display-4 fw-bold lh-1" style={{ color: "#64FFDA" }}>
              ABOUT ME
            </h1>{" "}
            <p className="lead" style={{ color: "#CCD6F6" }}>
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
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
