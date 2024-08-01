import { useState, useEffect } from "react";
import { Icons } from "../../Icons";
import { Modal } from "antd";
import "./ProjectCard.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { OVERVIEW_STATUS } from "./Projects.constants";

export default function ProjectCard({ projcetItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [overviewStatus, setOverviewStatus] = useState(OVERVIEW_STATUS.COVER);
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const showModal = () => {
    navigate(`#${projcetItem.hash}`);
  };

  const handleCancel = () => {
    navigate(pathname, { replace: true });
  };

  useEffect(() => {
    if (hash === `#${projcetItem.hash}`) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [hash]);

  return (
    <>
      <Modal
        centered
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width="1000px"
      >
        <div className="modal-container">
          <div className="overview-section">
            <div className="select-container">
              <span
                className={
                  overviewStatus === OVERVIEW_STATUS.COVER ? "active" : ""
                }
                onClick={() => setOverviewStatus(OVERVIEW_STATUS.COVER)}
              >
                Cover
              </span>
              {projcetItem.desktop && (
                <span
                  className={
                    overviewStatus === OVERVIEW_STATUS.DESKTOP ? "active" : ""
                  }
                  onClick={() => setOverviewStatus(OVERVIEW_STATUS.DESKTOP)}
                >
                  Desktop
                </span>
              )}
              {projcetItem.mobile && (
                <span
                  className={
                    overviewStatus === OVERVIEW_STATUS.MOBILE ? "active" : ""
                  }
                  onClick={() => setOverviewStatus(OVERVIEW_STATUS.MOBILE)}
                >
                  Mobile
                </span>
              )}
            </div>
            {overviewStatus === OVERVIEW_STATUS.COVER && (
              <img src={projcetItem.imgSrc} className="modal-cover-image" />
            )}
            {overviewStatus === OVERVIEW_STATUS.DESKTOP && (
              <div className="desktop-section">
                <div className="desktop-image-wrapper">
                  <img
                    src={projcetItem.desktop}
                    alt={projcetItem.desktop}
                    className="desktop-image"
                  />
                </div>
              </div>
            )}
            {overviewStatus === OVERVIEW_STATUS.MOBILE && (
              <div className="mobile-section">
                <div className="mobile-image-wrapper">
                  <img
                    src={projcetItem.mobile}
                    alt={projcetItem.mobile}
                    className="mobile-image"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="containt-container">
            <h3>{projcetItem.projectTitle}</h3>
            {projcetItem.link && (
              <div className="content-section">
                <h4>
                  Link:{" "}
                  <a href={projcetItem.link} target="_blank">
                    {projcetItem.link}
                  </a>
                </h4>
              </div>
            )}
            {projcetItem.timeRange && (
              <div className="content-section">
                <h4>Time Range</h4>
                <p>{projcetItem.timeRange}</p>
              </div>
            )}
            {projcetItem.techStacks && (
              <div className="content-section">
                <h4>Tech Stacks</h4>
                <div className="span-container">
                  {projcetItem.techStacks.map((techStack) => (
                    <span>{techStack}</span>
                  ))}
                </div>
              </div>
            )}
            <div className="content-section">
              <h4>Description</h4>
              <p>{projcetItem.description}</p>
            </div>
          </div>
        </div>
      </Modal>
      <div className="cards-item projcet-card">
        <div
          className="project-cover-image"
          style={{
            backgroundImage: `url(${projcetItem.imgSrc})`,
          }}
          onClick={showModal}
        ></div>
        <div className="project-card-contents">
          <h3>{projcetItem.projectTitle}</h3>
          <p className="time-range">{projcetItem.timeRange}</p>
          <p>{projcetItem.description}</p>
          <div className="see-more-container" onClick={showModal}>
            See More <Icons.externalLink className="see-more-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
