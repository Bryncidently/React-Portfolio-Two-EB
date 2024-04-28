function Project({title, github, image, app}) {

  return (
    <>

<div> <a href={app}target="_blank"><img className="projectImage" src={image} alt={title} /> </a>
<h2>{title}</h2>
<p><a className="githubLink" href={github} target="_blank"> <i class="bi bi-github"></i></a></p>
</div>

  </>);
}

export default Project;
