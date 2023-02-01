/* eslint-disable react/prop-types */
import './ProjectComponent.css';

function ProjectComponent({ name, src, linkImage1, linkImage2 }) {
  return (
    <div>
      <div className="project">
        <div className="name">
          <h3>{name}</h3>
        </div>
        <a href={src} target="_blank" rel="noreferrer">
          Ver mais
        </a>
        <div className="main-image">
          <img src={linkImage1} alt="" className="image1" />
          <img src={linkImage2} alt="" className="image2" />
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
