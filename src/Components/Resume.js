import React, { Component } from "react";
import Slide from "react-reveal";

const eduProjects = (projects) => {
  const listItems = projects.map((project) =>
    <li>
      <h6>{project.title}</h6>
      <p>{project.description}</p>
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const workDescription = (description) => {
  const listItems = description.map((desc) =>
    <li>{desc}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class Resume extends Component {

  render() {
    if (!this.props.data) return null;

    const work = this.props.data.work.map(function (work) {
      return (
        <div>
          <div key={work.company}>
            <h5>{work.company}</h5>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
          </div>
          <div>
          {workDescription(work.description)}
          </div>
        </div>
      );
    });

    const education = this.props.data.education.map(function (education) {
      console.log(education)
      return (
        <div>
          <div>
            <h4>{education.school}</h4>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
          </div>
          <div>
            {eduProjects(education.projects)}
          </div>
        </div>
      );
    });


    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
