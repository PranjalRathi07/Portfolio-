/** @format */
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom"; 

const PageWrapper = ({ children }) => {
  const el = useRef();
  const location = useLocation(); 

  useLayoutEffect(() => {
    
    gsap.killTweensOf(el.current);

    
    gsap.set(el.current, { opacity: 0, y: 20 });

    gsap.to(el.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
    });
    
  }, [location.pathname]); 

  return <div ref={el}>{children}</div>;
};

export default PageWrapper;