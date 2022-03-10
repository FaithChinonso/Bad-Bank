import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
// import badBankLogo from "../../assets/images/white.svg";
// import menuIcon from "../../assets/images/menu-linemenu.svg";
import CloseIcon from "@mui/icons-material/Close";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const NavItems = [
  { id: "1", title: "Bad Bank", route: "/" },
  { id: "2", title: "Create Account", route: "/createAccount" },
  { id: "3", title: "Deposit", route: "/deposit" },
  { id: "4", title: "Withdraw", route: "/withdraw" },
  { id: "5", title: "All Data", route: "/allData" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  return (
    <div className="navigationSection">
      <div className="navigation">
        <div className="logo">{/* <img src={} alt="Bank-logo" /> */}</div>

        <nav className="nav">
          <button onClick={handleToggle} className="navigationButton">
            {navbarOpen ? (
              <CloseIcon className="navigationIcon" />
            ) : (
              <DensityMediumIcon className="navigationIcon" />
            )}
          </button>
          <ul className="navigationNav">
            <div className="navigationItems">
              {NavItems.map((navItem) => (
                <Link
                  to={navItem?.route}
                  key={navItem?.id}
                  className="navigationList"
                  onClick={handleToggle}
                >
                  {navItem?.title}
                </Link>
              ))}
            </div>
          </ul>
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            {NavItems.map((navItem) => (
              <Link
                to={navItem?.route}
                key={navItem?.id}
                className="responsiveList"
                onClick={handleToggle}
              >
                {navItem?.title}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
