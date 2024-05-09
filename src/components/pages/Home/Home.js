import React, { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import "./Home.scss";
import Lottie from "lottie-react";
import gradientJson from "../../../animationJson/gradient_frame.json";
import { LogoLinkedin, Mail, ChevronDown } from "react-ionicons";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  handImgVariants,
  hiTitleVariant,
  titleVariants,
} from "./Home.constants";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../../redux/actions";
import WorkExperienceSection from "../WorkExperience/WorkExprience";
import { useLocation, useNavigate } from "react-router-dom";
import Projects from "../Projects/Projects";

export default function Home({ screenWidth }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isPhotoHover, setIsPhotoHover] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const [needScroll, setNeedScroll] = useState(false);
  const handRef = useRef(null);
  const aboutRef = useRef(null);
  const workExprienceRef = useRef(null);
  const projectsRef = useRef(null);
  const isHandInView = useInView(handRef);
  const isAboutSectionInView = useInView(aboutRef);
  const controls = useAnimation();
  const isAboutInView = useSelector((state) => state.isAboutInView);
  const sectionName = useSelector((state) => state.sectionName);
  const setSectionName = (path) => {
    dispatch(setValue("sectionName", path));
  };
  const setIsAboutInView = (boolean) => {
    dispatch(setValue("isAboutInView", boolean));
  };

  useEffect(() => {
    if (isHandInView) {
      controls.start("start");
      setTimeout(() => {
        setStartTyping(true);
      }, "2800");
    } else {
      setStartTyping(false);
    }
  }, [isHandInView]);

  useEffect(() => {
    setIsAboutInView(isAboutSectionInView);
  }, [isAboutSectionInView]);

  useEffect(() => {
    console.log(location.hash);
  }, [location.hash]);

  useEffect(() => {
    switch (sectionName) {
      case "/":
        break;
      case "/about":
        setNeedScroll(true);
        setTimeout(() => {
          aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
        setTimeout(() => {
          setNeedScroll(false);
        }, 1000);
        setSectionName("/");
        break;
      case "/work-experience":
        workExprienceRef.current?.scrollIntoView({ behavior: "smooth" });
        setSectionName("/");
        break;
      case "/projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        setSectionName("/");
        break;
      default:
        setSectionName("/");
        break;
    }
  }, [sectionName]);

  return (
    <div className="home-page">
      <div
        className={`main-content ${
          (isAboutInView || needScroll) && "main-content-snap"
        }`}
      >
        <section className="full-section about-section">
          <div className="about-ref-box" ref={aboutRef}></div>
          <div className="row-direction-container intro-container">
            <div className="column-direction-container intro-text-container">
              <motion.h2
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.1 }}
                variants={hiTitleVariant}
              >
                Hi{" "}
                <motion.img
                  ref={handRef}
                  className="emoji-hand"
                  src="/images/Waving-Hand-Icon.webp"
                  alt="/images/Waving-Hand-Icon.webp"
                  animate={controls}
                  variants={handImgVariants}
                />
                ,
              </motion.h2>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.1 }}
                variants={titleVariants}
              >
                <h2
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={titleVariants}
                >
                  My name is
                </h2>
                <h2 className="gradient-color-text">Lucas Wang</h2>
                <h2>I built things for</h2>
                <div className="type-writter-container">
                  {startTyping && (
                    <Typewriter
                      options={{
                        strings: [
                          "Web Applications",
                          "Mobile Apps",
                          "Full-stack Apps",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 20,
                        delay: 50,
                        cursorClassName: "type-writter-h2",
                        wrapperClassName: "type-writter-h2",
                      }}
                    />
                  )}
                </div>
              </motion.div>
            </div>
            <div className="column-direction-container">
              <a
                href={
                  screenWidth > 960 &&
                  "https://www.linkedin.com/in/lucaspanwang"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="personal-photo-container"
                  onMouseEnter={() => setIsPhotoHover(true)}
                  onMouseLeave={() => setIsPhotoHover(false)}
                  onClick={() => {}}
                >
                  <img
                    className="personal-photo"
                    src="/images/personal_photo.jpg"
                    alt="personal-photo"
                  />
                  <div
                    className={`${
                      screenWidth > 960 && isPhotoHover
                        ? "linkedin-container active"
                        : "linkedin-container"
                    }`}
                  >
                    <LogoLinkedin
                      width="120px"
                      height="120px"
                      color="#0077B5"
                    />
                  </div>
                  {screenWidth > 960 && isPhotoHover && (
                    <Lottie
                      animationData={gradientJson}
                      loop={true}
                      className="gradient-frame"
                    />
                  )}
                </div>
              </a>
              <a
                className="in-touch-button"
                href="mailto:lucaspanwang@gmail.com"
              >
                <Mail
                  color="#000"
                  width="1.8rem"
                  height="1.8rem"
                  cssClasses="in-touch-icon"
                />
                Get In Touch
              </a>
            </div>
          </div>
          <div
            className="scroll-down-container"
            onClick={() => setSectionName("/work-experience")}
          >
            Scroll Down
            <ChevronDown color={"#fff"} style={{ marginTop: "3px" }} />
          </div>
        </section>
        <WorkExperienceSection
          workExprienceRef={workExprienceRef}
          screenWidth={screenWidth}
        />
        <Projects projectsRef={projectsRef} />
      </div>
    </div>
  );
}
