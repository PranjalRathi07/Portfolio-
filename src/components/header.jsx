/** @format */

const Header = () => {
  return (
    <div
      className="container"
      style={{ background: "#020C1B", maxWidth: "1430px" }}
    >
      {" "}
      <header className="d-flex justify-content-center py-3">
        {" "}
        <ul className="nav nav-pills">
          {" "}
          <li className="nav-item">
            <a
              href="#"
              className="nav-link active"
              aria-current="page"
              style={{ color: "#CCD6F6", backgroundColor: "#0A192F" }}
            >
              Home
            </a>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link" style={{ color: "#CCD6F6" }}>
              About Me
            </a>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link" style={{ color: "#CCD6F6" }}>
              Skills
            </a>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link" style={{ color: "#CCD6F6" }}>
              Projects
            </a>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link" style={{ color: "#CCD6F6" }}>
              Education
            </a>
          </li>{" "}
          <li className="nav-item">
            <a href="#" className="nav-link" style={{ color: "#CCD6F6" }}>
              Contact Me
            </a>
          </li>{" "}
        </ul>{" "}
      </header>{" "}
    </div>
  );
};
export default Header;
