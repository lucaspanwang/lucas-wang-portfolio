import { useState, useEffect } from "react";
import { Icons } from "../../Icons";
import { Modal } from "antd";
import "./ProjectCard.scss";
import { useNavigate, useLocation } from "react-router-dom";

export default function ProjectCard({ projcetItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        width="800px"
      >
        <div className="modal-container">
          <img src={projcetItem.imgSrc} className="modal-cover-image" />
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
          <p>{projcetItem.description}</p>
          <div className="see-more-container" onClick={showModal}>
            See More <Icons.externalLink className="see-more-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
