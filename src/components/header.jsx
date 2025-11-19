/** @format */
import PillNav from "../animetion/pillnav";

const Header = () => {
  return (
    <div
      className="container"
      style={{ background: "#020C1B", maxWidth: "1430px" }}
    >
      {" "}
      <header className="d-flex justify-content-center py-3">
        {" "}
        <PillNav
          items={[
            { label: "Home", href: "/" },
            { label: "About Me", href: "/about" },
            { label: "Certification", href: "/certification" },
            { label: "Education", href: "/education" },
            { label: "Contact Me", href: "/contact-me" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#64FFDA"
          pillColor="#020C1B"
          hoveredPillTextColor="#020C1B"
          pillTextColor="#64FFDA"
        />
      </header>{" "}
    </div>
  );
};
export default Header;
