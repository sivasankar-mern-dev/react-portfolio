import React, { Component } from 'react';
import Pdf from '../Components/resume/siva-resume-new.pdf';

class About extends Component {

  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Siva Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <a href = {Pdf} target = "_blank"><button className="download">Download Resume</button></a>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
