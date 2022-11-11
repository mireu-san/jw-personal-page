import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  // to let it close when user click mobile menu category
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    // navbar as header, then mobile button; toggleButton
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        {/* toggle button for mobile */}
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      {/* desktop navbar */}

      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/experience"> Experience </Link>
        <Link to="/education"> Education </Link>
        <Link to="/projects"> Projects </Link>
      </div>
    </div>
  );
}

export default Navbar;
