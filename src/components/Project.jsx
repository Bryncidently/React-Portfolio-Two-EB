function Project({title, github, image, app}) {

  return (
    <>

<div className="card"> <a href={app} target="_blank"><img className="projectImage" src={image} alt={title} /> </a>
  <div className="card-body d-flex gap-3 justify-content-center">
    <h2>{title}</h2>
    <a className="githubLink" href={github} target="_blank"><i className="bi bi-github"></i></a>
  </div>
</div>

  </>);
}

export default Project;
