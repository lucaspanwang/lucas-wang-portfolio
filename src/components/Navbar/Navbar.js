import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Menu, LogoLinkedin, LogoGithub, Mail } from "react-ionicons";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../redux/actions";

function Navbar({ screenWidth }) {
  const dispatch = useDispatch();
  const isAboutInView = useSelector((state) => state.isAboutInView);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
  };
  const handleMobileNavLink = (path) => {
    closeMobileMenu();
    setSectionName(path);
  };
  const [linkedInColor, setLinkedInColor] = useState("#d0d0d0");
  const [githubColor, setGithubColor] = useState("#d0d0d0");
  const [mailColor, setMailColor] = useState("#d0d0d0");
  const [menuIconColor, setMenuIconColor] = useState("#d0d0d0");
  const [isTransparent, setIsTransparent] = useState(true);
  const navMenuMobileRef = useRef(null);
  const navbarRef = useRef(null);

  const setSectionName = (path) => {
    dispatch(setValue("sectionName", path));
  };

  useEffect(() => {
    setIsTransparent(isAboutInView);
    setLinkedInColor(isAboutInView ? "#d0d0d0" : "#3d3d3d");
    setGithubColor(isAboutInView ? "#d0d0d0" : "#3d3d3d");
    setMailColor(isAboutInView ? "#d0d0d0" : "#3d3d3d");
    setMenuIconColor(isAboutInView ? "#d0d0d0" : "#3d3d3d");
  }, [isAboutInView]);

  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (
        !navMenuMobileRef?.current?.contains(e.target) &&
        !navbarRef?.current?.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div
        className={`${
          isTransparent ? "menu-cover-transparent" : "menu-cover-bright"
        }`}
      ></div>
      <div className="navbar-container">
        <div className="navbar-main-mobile">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => handleMobileNavLink("/about")}
          >
            <img src="/images/cartoon_avatar.png" alt="cartoon_avatar" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <Menu color={menuIconColor} width="40px" height="40px" />
          </div>
        </div>
        {screenWidth > 960 && (
          <ul className="nav-menu">
            <li className="nav-item">
              <Link
                onClick={() => setSectionName("/about")}
                className={`nav-links ${
                  isTransparent
                    ? "nav-links-color-trans"
                    : "nav-links-color-bright"
                }`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => setSectionName("/work-experience")}
                className={`nav-links ${
                  isTransparent
                    ? "nav-links-color-trans"
                    : "nav-links-color-bright"
                }`}
              >
                Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => handleMobileNavLink("/projects")}
                className={`nav-links ${
                  isTransparent
                    ? "nav-links-color-trans"
                    : "nav-links-color-bright"
                }`}
              >
                Projects
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/"
                className={`nav-links ${
                  isTransparent
                    ? "nav-links-color-trans"
                    : "nav-links-color-bright"
                }`}
              >
                Contact
              </Link>
            </li> */}
            <li className="nav-item-icons">
              <a
                onMouseEnter={() =>
                  setLinkedInColor(isAboutInView ? "#fff" : "#000")
                }
                onMouseLeave={() =>
                  setLinkedInColor(isAboutInView ? "#d0d0d0" : "#3d3d3d")
                }
                href="https://www.linkedin.com/in/lucaspanwang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoLinkedin
                  color={linkedInColor}
                  width="30px"
                  height="30px"
                  style={{ cursor: "pointer" }}
                />
              </a>
              <a
                onMouseEnter={() =>
                  setGithubColor(isAboutInView ? "#fff" : "#000")
                }
                onMouseLeave={() =>
                  setGithubColor(isAboutInView ? "#d0d0d0" : "#3d3d3d")
                }
                href="https://github.com/lucaspanwang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoGithub
                  color={githubColor}
                  width="30px"
                  height="30px"
                  style={{ cursor: "pointer" }}
                />
              </a>
              <a
                onMouseEnter={() =>
                  setMailColor(isAboutInView ? "#fff" : "#000")
                }
                onMouseLeave={() =>
                  setMailColor(isAboutInView ? "#d0d0d0" : "#3d3d3d")
                }
                href="mailto:lucaspanwang@gmail.com"
              >
                <Mail
                  color={mailColor}
                  width="30px"
                  height="30px"
                  style={{ cursor: "pointer" }}
                />
              </a>
            </li>
          </ul>
        )}

        {screenWidth <= 960 && (
          <div
            className={`${
              click ? "nav-menu-mobile active" : "nav-menu-mobile"
            }`}
            ref={navMenuMobileRef}
          >
            <div
              className={`${
                isTransparent ? "menu-cover-transparent" : "menu-cover-bright"
              }`}
            ></div>
            <ul className="nav-item-ul">
              <li className="nav-item">
                <Link
                  onClick={() => handleMobileNavLink("/about")}
                  className={`nav-links ${
                    isTransparent
                      ? "nav-links-color-trans"
                      : "nav-links-color-bright"
                  }`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => handleMobileNavLink("/work-experience")}
                  className={`nav-links ${
                    isTransparent
                      ? "nav-links-color-trans"
                      : "nav-links-color-bright"
                  }`}
                >
                  Work Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => handleMobileNavLink("/projects")}
                  className={`nav-links ${
                    isTransparent
                      ? "nav-links-color-trans"
                      : "nav-links-color-bright"
                  }`}
                >
                  Projects
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-links ${
                    isTransparent
                      ? "nav-links-color-trans"
                      : "nav-links-color-bright"
                  }`}
                >
                  Contact
                </Link>
              </li> */}
              <li className="nav-item-icons">
                <a
                  href="https://www.linkedin.com/in/lucaspanwang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogoLinkedin
                    color={linkedInColor}
                    width="25px"
                    height="25px"
                    style={{ cursor: "pointer" }}
                  />
                </a>
                <a
                  href="https://github.com/lucaspanwang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogoGithub
                    color={githubColor}
                    width="25px"
                    height="25px"
                    style={{ cursor: "pointer" }}
                  />
                </a>
                <a href="mailto:lucaspanwang@gmail.com">
                  <Mail
                    color={mailColor}
                    width="25px"
                    height="25px"
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
