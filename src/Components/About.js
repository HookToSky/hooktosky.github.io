import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const linkedin = this.props.data.social[0].url;
    const email = this.props.data.email;
    const resumeDownload = "cv/" + this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Hande Akin"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{email}</span>
                    <br></br>
                    <span>{linkedin}</span>
                    <br></br>
                    <span>Or you can fill the form below...</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} target = "_blank" rel="noreferrer" className="button">
                      <i className="fa fa-download"></i>Download CV
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
