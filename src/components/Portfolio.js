import React from "react";

function Portfolio() {
  return (
    <div>
      <h1 id="projects">Portfolio</h1>
      <article className="project-carousel">

        <div className="projectDivs">
          <a href="https://kshakely5280.github.io/project_one/" target="_blank" rel="noopener noreferrer">
            <div class="other-projects project-1 opacity">
              <div className="other-projects-label label-1">BrewSky</div>

            </div>
          </a>
        </div>

        <div className="projectDivs">
          <a href="https://mrott0397.github.io/morgan-portfolio/" target="_blank" rel="noopener noreferrer">
            <div className="other-projects project-2 opacity">
              <div className="other-projects-label label-2">Portfolio</div>
            </div>
          </a>
        </div>

        <div className="projectDivs">
          <a href="https://mrott0397.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
            <div class="other-projects project-3 opacity">
              <div className="other-projects-label label-3">Weather Dashboard</div>
            </div>
          </a>
        </div>

        <div className="projectDivs">
          <a href="https://mrott0397.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer">
            <div class="other-projects project-4 opacity">
              <div className="other-projects-label label-4">Work Day Scheduler</div>
            </div>
          </a>
        </div>

        <div className="projectDivs">
          <a href="https://mrott0397.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
            <div class="other-projects project-5 opacity">
              <div className="other-projects-label label-5">Password Generator</div>
            </div>
          </a>
        </div>

        <div className="projectDivs">
          <a href="https://mrott0397.github.io/Code-Quiz/" target="_blank" rel="noopener noreferrer">
            <div class="other-projects project-6 opacity">
              <div className="other-projects-label label-6">Code Quiz</div>
            </div>
          </a>
        </div>
      </article>
    </div>

  );
};

export default Portfolio;

{/* // function Projects() {
    return (
        <section id="Work" className="page-section">
        <h2>Work</h2>
        <div className="project-container">
          <a href="https://kshakely5280.github.io/project_one/" target="_blank" className="projects project-1">
            <div className="div-project-heading">
              <h3>BrewSky</h3>
              <span>My project 1</span>
            </div>
          </a>
          <a href="https://mrott0397.github.io/morgan-portfolio/" target="_blank" className="projects  project-2">
            <div className="div-project-heading">
              <h3>Project 2</h3>
              <span>My project 2</span>
            </div>
          </a>
          <a href="#" className="projects project-3">
            <div className="div-project-heading">
              <h3>Project 3</h3>
              <span>My project 3</span>
            </div>
          </a>
          <a href="#" className="projects project-4">
            <div className="div-project-heading">
              <h3>Project 4</h3>
              <span>My project 4</span>
            </div>
          </a>
          <a href="#" className="projects project-5">
            <div className="div-project-heading">
              <h3>Project 5</h3>
              <span>My project 5</span>
            </div>
          </a>
        </div>
      </section>
    );
    }

export default Projects; */}