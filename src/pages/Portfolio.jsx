import Project from "../components/Project";

export default function Portfolio() {
  //picture
  //title
  //deployed app
  //github
    return (
      <div>
        <h1 className="mb-4">Portfolio</h1>
        <div className="projectContainer">
       <Project title="Note Taker" github="https://github.com/Bryncidently/Note-Taker" image="/Note Taker.png" app="https://bryn-note-taker-65f78605a07a.herokuapp.com/"/>

       <Project title="Scheduler" github="https://github.com/Bryncidently/Homework-5" image="/Scheduler.png" app="https://bryncidently.github.io/Homework-5/"/>

       <Project title="Tech Blog" github="https://github.com/MacroWil/Tech-Blog-EX" image="/Tech Blog.png" app="https://brzama-tech-blog-8396d9089178.herokuapp.com/"/>

       <Project title="Solemnace Galleries" github="https://github.com/zachmshort/Solemnace-Galleries" image="/Warhammer.png" app="https://solemnace-galleries-2d28de62aee4.herokuapp.com/"/>

       </div>
      </div>
    );
  }
  