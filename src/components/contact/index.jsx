import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import img from "../../resources/images/icons/fiverr.png";

const Contact = () => {
  return (
    <div
      style={{
        height: `60vh`,
        backgroundColor: `black`,
        paddingTop: `4rem`
        // transform: `translateY(20%)`
      }}
    >
      <div className="row">
        <h1 className="center white-text">Contact Me</h1>
      </div>
      <div className="row">
        <div className="col s2 center">
          <a
            href="https://www.fiverr.com/ismail_muhammad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img} alt="fiverr" width="58" />
          </a>
        </div>
        <div className="col s2 center">
          <a
            href="https://github.com/ismailmuhammed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon style={{ fontSize: `4rem`, color: `white` }} />
          </a>
        </div>
        <div className="col s2 center">
          <a
            href="https://www.facebook.com/ismail.sheikh.754918/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon style={{ fontSize: `4rem`, color: `#3b5998` }} />
          </a>
        </div>
        <div className="col s2 center">
          <a
            href="https://www.instagram.com/muhammadismail1655/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon style={{ fontSize: `4rem`, color: `white` }} />
          </a>
        </div>
        <div className="col s2 center">
          <a href="mailto:lord28062000@gmail.com">
            <EmailIcon style={{ fontSize: `4rem`, color: `white` }} />
          </a>
        </div>
        <div className="col s2 center">
          <a
            href="https://twitter.com/ismailsheikh234"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon style={{ fontSize: `4rem`, color: `#0e76a8` }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
