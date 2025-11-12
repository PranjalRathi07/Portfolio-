const Skills = () => {
  return (
    <>
      <div className="container px-4 py-5" id="custom-cards" >
        {" "}
        <h1 className="display-5 fw-bold  lh-1 mb-3"
            style={{ color: "#64FFDA" }}>Skills</h1>{" "}
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {" "}


          <div className="col">
            {" "}
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg skill-card"
            >
              {" "}
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                {" "}
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  APIs
                </h3>{" "}
                <p className="lead color-text">APIs (Application Programming Interfaces) allow different software applications to communicate and interact with each other, enabling integration and functionality sharing.</p>
              </div>{" "}
            </div>{" "}
          </div>{" "}


          <div className="col">
            {" "}
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg skill-card"
            >
              {" "}
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                {" "}
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  JavaScript
                </h3>{" "}
                <p className="lead color-text">JavaScript is a versatile programming language that enables interactive web pages and is an essential part of web applications.</p>
              </div>{" "}
            </div>{" "}
          </div>{" "}


          <div className="col">
            {" "}
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg skill-card"
              
            >
              {" "}
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                {" "}
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  React.js
                </h3>{" "}
                <p className="lead color-text">React.js is a popular JavaScript library for building user interfaces, particularly single-page applications, by creating reusable UI components.</p>
              </div>{" "}
            </div>{" "}
          </div>{" "}

          <div className="col">
            {" "}
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg skill-card"
              
            >
              {" "}
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                {" "}
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Bootstrap
                </h3>{" "}
                <p className="lead color-text">Bootstrap is a popular front-end framework for developing responsive and mobile-first websites using pre-designed components and a grid system.</p>
              </div>{" "}
            </div>{" "}
          </div>{" "}

          <div className="col">
            {" "}
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg skill-card"
            >
              {" "}
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                {" "}
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Mongo DB
                </h3>{" "}
                <p className="lead color-text">MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, allowing for scalable and high-performance applications.</p>
              </div>{" "}
            </div>{" "}
          </div>{" "}

          <div className="col">
            {" "}
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg skill-card"
            >
              {" "}
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                {" "}
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Core Java
                </h3>{" "}
                <p className="lead color-text">Core Java refers to the fundamental features and libraries of the Java programming language, providing the essential tools for building a wide range of applications.</p>
              </div>{" "}
            </div>{" "}
          </div>{" "}

        </div>{" "}
      </div>
    </>
  );
};
export default Skills;
