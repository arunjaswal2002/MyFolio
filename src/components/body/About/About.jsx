import React from "react";
import "./About.css";
import SocialContact from "../../Common/SocialContact/SocialContact";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi, I'm <br />
                  <span className="info-name">Arun Jaswal</span>
                  <br />Developer, Designer and Lifelong Learner!
        </div>
        <div className="about-photo"><img src={require("../../../assets/Coding.gif")} alt="" className="picture"/></div>
      </div>
      <div className="about-bottom"><SocialContact/></div>
    </div>
  );
}

export default About;
