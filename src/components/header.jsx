/** @format */
import PillNav from "../animetion/pillnav";
import { useLocation } from "react-router-dom";

const Nav_Item = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/aboutme" },
  { label: "Certification", href: "/certification" },
  { label: "Education", href: "/education" },
  { label: "Contact Me", href: "/contact-me" },
];

const Header = () => {
  const location = useLocation();

  return (
    <div
      className="container"
      style={{ background: "#020C1B", maxWidth: "1430px" }}
    >
      {" "}
      <header className="d-flex justify-content-center py-3">
        {" "}
        <PillNav
          items={Nav_Item}
          activeHref={location.pathname}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor=""
          pillColor="#020C1B"
          hoveredPillTextColor="#fff"
          pillTextColor="#64FFDA"
        />
      </header>{" "}
    </div>
  );
};
export default Header;
