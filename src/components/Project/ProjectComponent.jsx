import './ProjectComponent.css';

function ProjectComponent(src) {
  return (
    <div>
      <div className="project">
        <div className="name">
          <h3>name</h3>
        </div>
        <a href={src}>Ver mais</a>
        <div className="main-image">
          <img src="./images/paisagem.jpg" alt="" className="image1" />
          <img src="./images/hover.jpg" alt="" className="image2" />
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
