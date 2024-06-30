import "./Projects.scss";
import ProjectCard from "./ProjectCard";
import { projcetItems } from "./Projects.constants";

export default function Projects({ projectsRef }) {
  return (
    <section className="section work-experience-section" ref={projectsRef}>
      <div className="title-container">Selected Projects</div>
      <div className="cards-items project-cards-wrapper">
        {projcetItems.map((projectItem) => (
          <ProjectCard projcetItem={projectItem} />
        ))}
      </div>
    </section>
  );
}
